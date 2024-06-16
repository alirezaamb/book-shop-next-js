import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../services';

export const useGetBooks = () => {
  return useQuery({ queryKey: ['allBooks'], queryFn: () => getBooks() });
};
