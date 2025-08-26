import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import shoeApi from "../service/shoe";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { ShoeFormValues } from "../types";

const useShoes = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // Get all shoes
  const shoes = () =>
    useQuery({
      queryKey: ["shoes"],
      queryFn: () => shoeApi.getAll(),
      select: (data) => data.data,
    });

  // Get shoe
  const shoe = (id: string) =>
    useQuery({
      queryKey: ["shoe", id],
      queryFn: () => shoeApi.getById(id),
      select: (data) => data.data,
    });

  // Create shoe
  const create = useMutation({
    mutationKey: ["create-shoe"],
    mutationFn: (data: ShoeFormValues) => shoeApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/admin");
      toast.success("The product was successfully created.");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "An error occurred");
    },
  });

  // Update shoe
  const update = useMutation({
    mutationKey: ["update-shoe"],
    mutationFn: ({ id, data }: { id: string; data: Partial<ShoeFormValues> }) =>
      shoeApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/admin");
      toast.success("The product has been successfully updated.");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "An error occurred");
    },
  });

  // Delete shoe
  const remove = useMutation({
    mutationKey: ["remove-shoe"],
    mutationFn: (id: string) => shoeApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("The product has been successfully deleted.");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "An error occurred");
    },
  });

  return { shoes, shoe, create, update, remove };
};

export default useShoes;
