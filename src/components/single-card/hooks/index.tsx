import { useQuery } from '@tanstack/react-query';
import { getBookById } from '../services';

export const useGetBookById = (id: string) => {
  return useQuery({ queryKey: ['bookId', id], queryFn: () => getBookById(id) });
};
