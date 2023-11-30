import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ fullName, password, email }) =>
      signupApi({ fullName, password, email }),
    onSuccess: () => toast.success("Account successfully created"),
  });
  return { signUp, isLoading };
}
