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

export const updateDelivery = async ({
  id,
  delivered,
}: {
  id: string;
  delivered: boolean;
}) => {
  const res = await axios.patch(`${BASE_URL}/order/${id}`, {
    delivered,
  });
  return res;
};
