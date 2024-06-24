import { Dispatch, SetStateAction } from 'react';

export interface IBooks {
  books: BooksEntity[];
}
export interface BooksEntity {
  id: string;
  name: string;
  desc: string;
  price: number;
  imgURL: string;
  author: string;
  translator: string;
  pictures: string[];
  discount: number;
  salesAmount: number;
  inventory: number;
}

export interface SingInType {
  setSearchParams: (params: URLSearchParams | Record<string, string>) => void;
}
export interface SignUpType {
  setSearchParams: (params: URLSearchParams | Record<string, string>) => void;
}

export interface UserType {
  firstName?: FormDataEntryValue | null;
  lastName?: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  role: string;
}
export interface BasicModaltype {
  modal: { isOpen: boolean; message: string };
  setModal: (modal: { isOpen: boolean; message: string }) => void;
}

export interface Publisher {
  id: number;
  image: string;
  name: string;
}
// export interface NewProductType {
//   imgURL: string;
//   id: string;
//   price: number;
//   name: string;
//   author: string;
//   translator: string;
//   desc: string;
//   file: File | undefined;
// }

export interface EditModalType {
  editModal: { isOpen: boolean; id: string };
  setEditModal: Dispatch<SetStateAction<{ isOpen: boolean; id: string }>>;
}

export interface Inputs {
  name: string;
  author: string;
  translator: string;
  desc: string;
  price: number;
  imgURL: File | string;
  file: File | undefined;
}
export interface AddProductProps {
  editId?: string;
  setEditModal?: (modal: { isOpen: boolean; id: string }) => void;
  setIsOpenForm?: Dispatch<SetStateAction<boolean>>;
}

export interface BooksOfCartType {
  author: string;
  desc: string;
  id: string;
  imgURL: string;
  price: number;
  quantity: number;
  name: string;
}
