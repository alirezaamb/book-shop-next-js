import { BASE_URL } from "@/api/const";
import axios from "axios";

export const getBookById = async (id: number | string | string[]) => {
    const response = await axios.get(`${BASE_URL}/books/${id}`);
    return response.data;
  };
  