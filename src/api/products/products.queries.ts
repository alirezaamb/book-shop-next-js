import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  deleteRow,
  editedProduct,
  getBookById,
  getBooks,
  newProduct,
} from '@/api/products/products.api';
import { AxiosResponse } from 'axios';
import { NewProductType } from '@/api/products/products.type';

export const useGetBooks = () => {
  return useQuery({
    queryKey: ['allBooks'],
    queryFn: () => {
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

export const useEditBook = () => {
  const queryClient = useQueryClient();

  const editMutation: UseMutationResult<
    AxiosResponse<any>,
    Error,
    NewProductType
  > = useMutation({
    mutationFn: editedProduct,
    mutationKey: ['editedBook'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBooks'] });
    },
  });

  return editMutation;
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: ['deleteBook'],
    mutationFn: deleteRow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBooks'] });
    },
  });

  return deleteMutation;
};
