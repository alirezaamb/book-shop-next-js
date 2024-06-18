import { BASE_URL } from '@/api/const';
import { NewProductType } from '@/types/types';
import axios, { AxiosResponse } from 'axios';

export const getBooks = async () => {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
};

export const deleteRow = (id: string) => {
  const res = axios.delete(`${BASE_URL}/books/${id}`);
  return res;
};

export const newProduct = async (
  product: NewProductType
): Promise<AxiosResponse<any>> => {
  return await axios.post(`${BASE_URL}/books`, product);
};

export const editedProduct = async (
  product: NewProductType
): Promise<AxiosResponse<any>> => {
  return await axios.put(`${BASE_URL}/books/${product.id}`, product);
};

export const getBookById = async (id: string | string[] | undefined) => {
  const response = await axios.get(`${BASE_URL}/books/${id}`);
  return response.data;
};
