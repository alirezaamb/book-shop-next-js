import { BooksEntity } from '@/types/types';

export interface OrderType {
  userId: string;
  books: Array<BooksEntity>;
  delivered: boolean;
}
