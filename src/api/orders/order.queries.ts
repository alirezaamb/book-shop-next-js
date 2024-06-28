import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllOrders, newOrder } from './order.api';

export const useAddOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: newOrder,
    mutationKey: ['newOrder'],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['allOrders'] }),
  });
};

export const useGetAllOrders = () => {
  return useQuery({ queryFn: getAllOrders, queryKey: ['allOrders'] });
};
