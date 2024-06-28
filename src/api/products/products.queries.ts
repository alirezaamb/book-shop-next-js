import {
  deleteRow,
  getBookById,
  getBooks,
  newProduct,
  patchAllProduct,
} from '@/api/products/products.api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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

  const addMutation = useMutation({
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

  const editMutation = useMutation({
    mutationFn: patchAllProduct,
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
