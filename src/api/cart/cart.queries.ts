import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  EditCardOfCart,
  addToCart,
  deleteItemFromCart,
  getAllItemsOfCart,
} from './cart.api';

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: addToCart,
    mutationKey: ['addNewItemToCart'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allCartItem'] });
    },
  });

  return addMutation;
};

export const useGetAllCartItems = () => {
  return useQuery({
    queryFn: getAllItemsOfCart,
    queryKey: ['allCartItem'],
  });
};

export const useDeleteItemFromCart = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteItemFromCart,
    mutationKey: ['deleteItemFromCart'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allCartItem'] });
    },
  });
  return deleteMutation;
};

export const useUpdateItemOfCart = () => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: EditCardOfCart,
    mutationKey: ['updateItemOfCart'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allCartItem'] });
    },
  });
  return updateMutation;
};
