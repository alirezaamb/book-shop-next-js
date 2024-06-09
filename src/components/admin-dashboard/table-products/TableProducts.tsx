import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { BooksEntity } from '../../../types/types';
import { getBooks } from '@/api/get/get';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'نام محصول', width: 250 },
  { field: 'author', headerName: 'نویسنده', width: 250 },
  {
    field: 'price',
    headerName: 'قیمت محصول',
    type: 'number',
    width: 90,
  },
  {
    field: 'imgURL',
    headerName: 'عکس محصول',
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.imgURL}
        alt={params.row.name}
        style={{ width: 50, height: 50, borderRadius: '50%' }}
      />
    ),
  },
];

export default function TableProducts() {
  const [bookRows, setBookRows] = useState<BooksEntity[]>([]);

  useEffect(() => {
    getBooks().then((books) => setBookRows(books));
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={bookRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
