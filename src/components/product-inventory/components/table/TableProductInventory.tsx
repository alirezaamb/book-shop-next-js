import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useEditedBook,
  useGetBooks,
} from '@/components/product-inventory/hooks/index';
import { useEffect, useState } from 'react';
import { BooksEntity } from '@/types/types';

const TableProductInventory = () => {
  const { data } = useGetBooks();
  const [isEdit, setIsEdit] = useState<Record<string, boolean | number>>({
    price: false,
    inventory: false,
  });

  const [books, setBooks] = useState<BooksEntity[]>([]);
  const [editedBooks, setEditedBooks] = useState<BooksEntity[]>([]);

  useEffect(() => {
    setBooks(data);
  }, [data]);

  const editHandler = (editedBook: any) => {
    const finded = editedBooks.find((item) => item.id === editedBook.id);

    if (!finded) {
      setEditedBooks([...editedBooks, editedBook]);
    } else {
      const index = editedBooks.indexOf(finded);
      let temp = editedBooks;
      temp[index] = editedBook;
      setEditedBooks(temp);
    }
  };

  const { mutate } = useEditedBook();

  const changeHandler = () => {
    editedBooks.map((item) => {
      mutate(item);
    });
  };

  return (
    <>
      <button onClick={changeHandler}>ثبت تغییرات</button>
      <Table dir="rtl">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">نام محصول</TableHead>
            <TableHead className="text-right">موجودی</TableHead>
            <TableHead className="text-right">قیمت</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.map((book: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <span>{book?.name}</span>
                </TableCell>
                <TableCell
                  onClick={() => {
                    setIsEdit((prev) => ({
                      ...prev,
                      inventory: book.id,
                    }));
                  }}
                >
                  {isEdit.inventory === book?.id ? (
                    <input
                      defaultValue={book?.inventory}
                      onBlur={(e) => {
                        let temp = books;
                        temp[index] = { ...book, inventory: e.target.value };
                        editHandler(temp[index]);
                        setIsEdit((prev) => ({ ...prev, inventory: false }));
                        setBooks(temp);
                      }}
                    />
                  ) : (
                    <span>{book?.inventory}</span>
                  )}
                </TableCell>
                <TableCell
                  onClick={() => {
                    setIsEdit((prev) => ({
                      ...prev,
                      price: book.id,
                    }));
                  }}
                >
                  {isEdit.price === book?.id ? (
                    <input
                      defaultValue={book?.price}
                      onBlur={(e) => {
                        let temp = books;
                        temp[index] = { ...book, price: e.target.value };
                        setIsEdit((prev) => ({ ...prev, price: false }));
                        setBooks(temp);
                        editHandler(temp[index]);
                      }}
                    />
                  ) : (
                    <span>{book?.price}</span>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TableProductInventory;
