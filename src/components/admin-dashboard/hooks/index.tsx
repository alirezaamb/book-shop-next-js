import { useQuery } from '@tanstack/react-query';
import { getBookById, getBooks } from '@/components/admin-dashboard/services';

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
    refetchOnMount: 'always',
  });
};
