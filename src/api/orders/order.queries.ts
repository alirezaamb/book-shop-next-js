import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllOrders, newOrder, updateDelivery } from './order.api';

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


export const useUpdateDelivered = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateDelivery,
    mutationKey: ['updateDelivery'],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['allOrders'] }),
  });
};