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
