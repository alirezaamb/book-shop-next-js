import { BASE_URL } from "@/api/const";
import axios from "axios";

export const getPublishersPhoto = async () => {
  const response = await axios.get(`${BASE_URL}/publishers`);
  return response.data;
};

export const getBooks = async ()=>{
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data
}