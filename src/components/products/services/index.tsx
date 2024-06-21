import { BASE_URL } from "@/api/const";
import axios from "axios";

export const getBooks = async () => {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
};
