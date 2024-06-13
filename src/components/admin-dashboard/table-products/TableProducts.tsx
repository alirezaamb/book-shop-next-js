import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { BooksEntity } from '../../../types/types';
import { getBooks } from '@/api/get/get';
import { Directions } from '@mui/icons-material';
import { Button } from '@mui/material';
import { deleteRow } from '@/api/delete/delete';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { blue } from '@mui/material/colors';
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
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={params.row.imgURL}
        alt={params.row.name}
        style={{ width: 50, height: 50, borderRadius: '50%' }}
      />
    ),
  },
  {
    field: 'action',
    headerName: 'عملیات ها',
    width: 200,
    renderCell: (params) => {
      const deleteHandler = async (id: number) => {
        await deleteRow(id);
      };
      return (
        <div>
          <Button onClick={() => deleteHandler(params.row.id)}>
            <DeleteIcon sx={{ color: 'red' }} />
          </Button>
          <Button>
            <EditIcon sx={{ color: blue[400] }} />
          </Button>
        </div>
      );
    },
  },
];

export default function TableProducts() {
  const [bookRows, setBookRows] = useState<BooksEntity[]>([]);

  const fetchData = async () => {
    await getBooks().then((books) => setBookRows(books));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        autoPageSize
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
