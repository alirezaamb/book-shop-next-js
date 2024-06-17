import axios from 'axios';
import { BASE_URL } from '../const';
import { UserType } from '../../types/types';

export const newUser = async (data: UserType) => {
  return await axios.post(`${BASE_URL}/profiles`, data);
};

// export const newProduct = async (data) => {
//   return await axios.post(`${BASE_URL}/books`, data);
// };
