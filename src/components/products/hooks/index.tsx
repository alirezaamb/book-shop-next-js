import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../services";

export const useGetBooks = ()=>{
    return useQuery({queryKey:['Books'],queryFn:()=>getBooks()})
}