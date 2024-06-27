import axios from 'axios';
import { BASE_URL } from '@/api/const';
import { CartType } from './cart.type';

export const addToCart = async (data: CartType) => {
  const res = await axios.post(`${BASE_URL}/cart`, data);
  return res;
};

export const getAllItemsOfCart = async () => {
  const res = await axios.get(`${BASE_URL}/cart`);
  return res;
};

export const deleteItemFromCart = async (id: string) => {
  const res = await axios.delete(`${BASE_URL}/cart/${id}`);
};

export const EditCardOfCart = async (data: Partial<CartType>) => {
  const res = await axios.patch(`${BASE_URL}/cart/${data.id}`, data);
  return res;
};
