import {
  UseMutationResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { editedProduct, getBooks } from '../services';
import { AxiosResponse } from 'axios';
import { BooksEntity } from '@/types/types';

export const useGetBooks = () => {
  return useQuery({
    queryKey: ['allBooks'],
    queryFn: () => {
      return getBooks();
    },
    refetchOnMount: 'always',
  });
};

export const useEditedBook = () => {
  const editMutation: UseMutationResult<
    AxiosResponse<any>,
    Error,
    BooksEntity
  > = useMutation({
    mutationFn: editedProduct,
    mutationKey: ['editedBook'],
  });

  return editMutation;
};
