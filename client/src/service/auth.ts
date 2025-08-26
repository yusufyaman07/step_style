import type { LoginFormValues, RegisterFormValues } from "../types";
import api from "./api";

const authApi = {
  // Register
  register: (data: RegisterFormValues) => api.post("/auth/register", data),
  // Login
  login: (data: LoginFormValues) => api.post("/auth/login", data),
  // Logout
  logout: () => api.post("/auth/logout"),
  // Get Me
  getMe: () => api.get("/auth/me"),
  // Refresh Token
  refreshToken: () => api.post("/auth/refresh-token"),
};

export default authApi;
