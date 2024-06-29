import { UserType } from '@/types/types';
import axios from 'axios';
import { BASE_URL } from '../const';
import { OrderType } from './order.type';

export const newOrder = async (data: OrderType) => {
  const res = await axios.post(`${BASE_URL}/order`, data);
  return res;
};

export const getAllOrders = async () => {
  const res = await axios.get(`${BASE_URL}/order`);
  return res.data;
};
