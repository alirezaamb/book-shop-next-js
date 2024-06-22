// import {
//   UseMutationResult,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from '@tanstack/react-query';
// import { editedProduct, getBooks } from '../services';
// import { AxiosResponse } from 'axios';
// import { BooksEntity } from '@/types/types';

// export const useGetBooks = () => {
//   return useQuery({
//     queryKey: ['allBooks'],
//     queryFn: () => {
//       return getBooks();
//     },
//   });
// };

// export const useEditedBook = () => {
//   const queryClient = useQueryClient();
//   const editMutation: UseMutationResult<
//     AxiosResponse<any>,
//     Error,
//     BooksEntity
//   > = useMutation({
//     mutationFn: editedProduct,
//     mutationKey: ['editedBook'],
//     onSuccess: () => {
//       queryClient.invalidateQueries(['allBooks']);
//     },
//   });

//   return editMutation;
// };
