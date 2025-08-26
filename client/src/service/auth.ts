import type {
  AuthResponse,
  GetMeResponse,
  LoginFormValues,
  LogoutResponse,
  RefreshResponse,
  RegisterFormValues,
} from "../types";
import api from "./api";

const authApi = {
  // Register
  register: (data: RegisterFormValues) =>
    api.post<AuthResponse>("/auth/register", data),
  // Login
  login: (data: LoginFormValues) => api.post<AuthResponse>("/auth/login", data),
  // Logout
  logout: () => api.post<LogoutResponse>("/auth/logout"),
  // Get Me
  getMe: () => api.get<GetMeResponse>("/auth/me"),
  // Refresh Token
  refreshToken: () => api.post<RefreshResponse>("/auth/refresh-token"),
};

export default authApi;
