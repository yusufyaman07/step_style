import type { Shoe, ShoeFormValues } from "../types";
import api from "./api";

const shoeApi = {
  // Get all shoes
  getAll: () => api.get<Shoe[]>("/shoes"),
  // Get shoe by ID
  getById: (id: string) => api.get<Shoe>(`/shoes/${id}`),
  // Create, update, delete shoe
  create: (data: ShoeFormValues) => api.post<Shoe>("/shoes", data),
  update: (id: string, data: Partial<ShoeFormValues>) =>
    api.put<Shoe>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete(`/shoes/${id}`),
};

export default shoeApi;
