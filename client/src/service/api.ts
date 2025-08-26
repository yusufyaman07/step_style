import axios from "axios";
import type { AuthResponse } from "../types";

const api = axios.create({
  baseURL: "http://localhost:4044/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalReq = err.config;

    if (
      err.response.status === 401 &&
      !originalReq._retry &&
      err.response.data.message === "Access token expired"
    ) {
      originalReq._retry = true;

      try {
        const res = await api.post<AuthResponse>("/auth/refresh");

        return api(originalReq);
      } catch (err) {
        await api.post("/auth/logout");

        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
