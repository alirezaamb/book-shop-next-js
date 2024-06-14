import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/components/admin-dashboard/services";

export const useGetBooks = ()=>{
    return useQuery({queryKey:['Books'],queryFn:()=>getBooks()})
}