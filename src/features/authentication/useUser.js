import { useQuery } from "@tanstack/react-query";
import { getCurrUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading: isGettingUser } = useQuery({
    queryFn: getCurrUser,
    queryKey: ["user"],
  });
  return {
    user,
    isGettingUser,
    isAuthenticated: user?.role === "authenticated",
  };
}
