import axios from 'axios';
import { BASE_URL } from '../const';
import { AddressType } from './userInfo.type';

export const getUserProfile = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/profiles/${id}`);
  console.log(response.data);
  return response.data;
};

export const updateProfile = async ({
  id,
  address,
}: {
  id: string;
  address: AddressType;
}) => {
  const response = await axios.patch(`${BASE_URL}/profiles/${id}`, { address });
  return response.data;
};
