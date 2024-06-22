import axios from 'axios';
import { BASE_URL } from '../const';

export const getPublishersPhoto = async () => {
  const response = await axios.get(`${BASE_URL}/publishers`);
  return response.data;
};
