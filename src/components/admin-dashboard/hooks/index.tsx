import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  editedProduct,
  getBookById,
  getBooks,
  newProduct,
} from '@/components/admin-dashboard/services';
import { AxiosResponse } from 'axios';
import { NewProductType } from '@/types/types';

export const useGetBooks = () => {
  return useQuery({
    queryKey: ['allBooks'],
    queryFn: () => {
      console.log('get all books');
      return getBooks();
    },
  });
};

export const useGetBookById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['editBook', id],
    queryFn: () => {
      return getBookById(id);
    },
    enabled: !!id,
    refetchOnMount: 'always',
  });
};

export const useAddBook = () => {
  const queryClient = useQueryClient();

  const addMutation: UseMutationResult<
    AxiosResponse<any>,
    Error,
    NewProductType
  > = useMutation({
    mutationFn: newProduct,
    mutationKey: ['addBook'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBooks'] });
    },
  });

  return addMutation;
};

export const useEditBook = (id: string) => {
  const queryClient = useQueryClient();

  const editMutation: UseMutationResult<
    AxiosResponse<any>,
    Error,
    NewProductType
  > = useMutation({
    mutationFn: editedProduct,
    mutationKey: ['editedBook', id],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBooks'] });
    },
  });

  return editMutation;
};
