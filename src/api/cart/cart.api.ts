import { BASE_URL } from '@/api/const';
import { UserType } from '@/types/types';
import axios from 'axios';

export const getAllItemsOfCart = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/profiles/${id}`);
  return res.data.cart;
};

export const updateCart = async (data: Partial<UserType>) => {
  const res = await axios.patch(`${BASE_URL}/profiles/${data.id}`, {
    cart: data.cart,
  });
  return res;
};
