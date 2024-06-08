import axios from 'axios';
import { BASE_URL } from '../const';

export const getBooks = async () => {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
};

export const getBookById = async (id: number | string | string[]) => {
  const response = await axios.get(`${BASE_URL}/books/${id}`);
  return response.data;
};

export const getAllProfiles = async () => {
  const res = await axios.get(`${BASE_URL}/profiles`);
  return res.data;
};
