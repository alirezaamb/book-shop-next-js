import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { blue } from '@mui/material/colors';
import { useGetBooks } from '@/components/products/hooks';
import { deleteRow } from '../../services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import LoadingPage from '@/components/shared/loading/Loading';
import EditFormModal from '../edit-product-form';
import { useState } from 'react';
import AddProduct from '../add-product-form/AddProduct';

export default function TableProducts() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [editModal, setEditModal] = useState({
    isOpen: false,
    id: 0,
  });
  const queryClient = useQueryClient();

  const { mutate: deleteHandler } = useMutation({
    mutationKey: ['deleteBook'],
    mutationFn: deleteRow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allBooks'] });
    },
  });

  const editHandler = (id: number) => {
    setEditModal({ id, isOpen: true });
  };
  //get data of the table
  const { data: bookRows, isLoading } = useGetBooks();

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
        return (
          <div>
            <Button onClick={() => deleteHandler(params.row.id)}>
              <DeleteIcon sx={{ color: 'red' }} />
            </Button>
            <Button onClick={() => editHandler(params.row.id)}>
              <EditIcon sx={{ color: blue[400] }} />
            </Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div style={{ height: 450, width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          p: 3,
        }}
      >
        <Button variant="contained" onClick={() => setIsOpenForm(true)}>
          اضافه کردن محصول جدید
        </Button>
      </Box>
      <DataGrid
        sx={{ direction: 'ltr' }}
        autoPageSize
        rows={bookRows ? bookRows : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <EditFormModal setEditModal={setEditModal} editModal={editModal} />
      {/* {isOpenForm ? <AddProduct setIsOpenForm={setIsOpenForm} /> : ''} */}
    </div>
  );
}
