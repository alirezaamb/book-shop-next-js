export interface IBooks {
  books: BooksEntity[];
}
export interface BooksEntity {
  id: number | string;
  name: string;
  desc: string;
  price: number;
  imgURL: string;
  author: string;
  translator: string;
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
export interface NewProductType {
  imgURL: string;
  id: string;
  price: number;
  name: string;
  author: string;
  translator: string;
  desc: string;
  file: File | undefined;
}

export interface EditModalType {
  editModal: { isOpen: boolean; id: string };
  setEditModal: (modal: { isOpen: boolean; id: string }) => void;
}
