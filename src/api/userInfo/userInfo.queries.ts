import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserProfile, updateProfile } from './userInfo.api';

export const useGetUserProfile = (id: string) => {
  return useQuery({
    queryKey: ['getUserProfile'],
    queryFn: () => getUserProfile(id),
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateUserProfile'],
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getUserProfile'] });
    },
  });
};
