import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { getAllUsers } from '@/components/auth/services';
import { AxiosResponse } from 'axios';
import { newUser } from '@/api/post/post';
import { UserType } from '@/types/types';

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['allUsers'],
    queryFn: () => {
      return getAllUsers();
    },
  });
};

export const useNewUser = (): UseMutationResult<
  AxiosResponse<any>,
  Error,
  any
> => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<any>, Error, any>({
    mutationFn: newUser,
    mutationKey: ['addNewProfile'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allProfiles'] });
    },
  });
};
