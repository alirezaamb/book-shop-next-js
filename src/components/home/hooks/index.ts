import { useQuery } from "@tanstack/react-query";
import { getBooks, getPublishersPhoto } from "../services";

export const useGetPublisher = () => {
  return useQuery({
    queryKey: ["publishers"],
    queryFn: () => getPublishersPhoto(),
  });
};

export const useGetBooks = () => {
  return useQuery({
    queryKey: ["allBooks"],
    queryFn: () => getBooks(),
  });
};
