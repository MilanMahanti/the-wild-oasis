import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: activity, isLoading } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["activity"],
  });
  return { activity, isLoading };
}
