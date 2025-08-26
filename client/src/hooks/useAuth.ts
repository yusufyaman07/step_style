import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { LoginFormValues, RegisterFormValues } from "../types";
import authApi from "../service/auth";
import { toast } from "react-toastify";

const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginFormValues) => authApi.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Login successful");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "An error has occurred");
    },
  });

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterFormValues) => authApi.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Registration successful");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "An error has occurred");
    },
  });

  const logout = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Exit successful");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "An error occurred");
    },
  });

  return { login, register, logout };
};

export default useAuth;
