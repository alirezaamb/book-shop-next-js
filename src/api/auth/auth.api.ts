import { UserType } from '@/types/types';
import axios from 'axios';
import { BASE_URL } from '../const';

export const getAllUsers = async () => {
  const res = await axios.get(`${BASE_URL}/profiles`);
  return res.data;
};

export const newUser = async (data: UserType) => {
  return await axios.post(`${BASE_URL}/profiles`, data);
};
