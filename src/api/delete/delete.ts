import axios from 'axios';
import { BASE_URL } from '../const';

export const deleteRow = (id: number) => {
  const res = axios.delete(`${BASE_URL}/books/${id}`);
  return res;
};
