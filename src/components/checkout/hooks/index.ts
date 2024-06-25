import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services";

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfile(),
  });
};
