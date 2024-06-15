import { useQuery } from '@tanstack/react-query';
import { getBookById, getBooks } from '@/components/admin-dashboard/services';

export const useGetBooks = () => {
  return useQuery({
    queryKey: ['Books'],
    queryFn: () => getBooks(),
  });
};

export const useGetBookById = (id: string | undefined) => {
  return useQuery({ queryKey: ['editBook'], queryFn: () => getBookById(id) });
};
