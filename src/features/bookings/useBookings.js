import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "./../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { RES_PER_PAGE } from "../../utils/constants";
export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //Sort
  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, value] = sortByValue.split("-");
  const sortBy = {
    field,
    value,
  };
  const page = searchParams.get("page") || 1;
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  const pageCount = Math.ceil(count / RES_PER_PAGE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }
  return { isLoading, bookings, error, count };
}
