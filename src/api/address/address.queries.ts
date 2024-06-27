import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "./address.api";
import { AddressType } from "./address.type";

export const useGetUserProfile = (id: string) => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfile(id),
  });
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ["userProfile"],
    mutationFn: updateProfile,
  });
};
