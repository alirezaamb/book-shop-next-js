import {
  useQuery,
  UseMutationResult,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { getAllUsers, newUser } from './auth.api';

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
