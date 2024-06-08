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
