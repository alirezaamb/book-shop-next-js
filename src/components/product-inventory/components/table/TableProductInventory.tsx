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
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { BooksEntity } from '@/types/types';
import LoadingPage from '@/components/shared/loading/Loading';
import { Box } from '@mui/material';

const TableProductInventory = () => {
  const { data, isLoading } = useGetBooks();
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

  const { mutate, isPending } = useEditedBook();
  console.log(isPending);

  const changeHandler = () => {
    editedBooks.forEach((item) => mutate(item));
  };
  //   const changeHandler = async () => {
  //     try {
  //       await Promise.all(editedBooks.map((item) => mutate(item)));
  //       // Optionally, you can reset the editedBooks state after successful mutation
  //       setEditedBooks([]);
  //       console.log('All changes have been saved successfully');
  //     } catch (error) {
  //       console.error('Error saving changes:', error);
  //     }
  //   };

  if (isLoading || isPending) {
    return <LoadingPage />;
  }
  const formatNumberToFarsi = (number) => {
    return new Intl.NumberFormat('fa-IR', { useGrouping: true }).format(number);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button onClick={changeHandler} variant={'default'} color="primary">
        ثبت تغییرات
      </Button>
      <Table dir="rtl">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right w-1/3">نام محصول</TableHead>
            <TableHead className="text-right w-1/3">موجودی</TableHead>
            <TableHead className="text-right w-1/3">قیمت</TableHead>
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
                    <span>{formatNumberToFarsi(book?.inventory)}</span>
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
                    <span>{formatNumberToFarsi(book?.price)}</span>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableProductInventory;
