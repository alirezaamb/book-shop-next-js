import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { blue } from '@mui/material/colors';
import { useGetBooks } from '@/api/products/products.queries';
import LoadingPage from '@/components/shared/loading/Loading';
import EditFormModal from '../edit-modal';
import { useState } from 'react';
import AddProduct from '../add-product-form/AddProduct';
import { useDeleteBook } from '@/api/products/products.queries';

export default function TableProducts() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [editModal, setEditModal] = useState({
    isOpen: false,
    id: '',
  });

  const [confirmDelete, setConfirmDelete] = useState({ isOpen: false, id: '' });

  //handle delete book
  const { mutate: deleteHandler } = useDeleteBook();

  const handleClickOpen = (id: string) => {
    setConfirmDelete(() => ({ id, isOpen: true }));
  };
  const abortDeleteHanler = () => {
    setConfirmDelete(() => ({ id: '', isOpen: false }));
  };
  const deleteItem = () => {
    deleteHandler(confirmDelete.id);
    setConfirmDelete(() => ({ id: '', isOpen: false }));
  };

  const editHandler = (id: string) => {
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
            <Button onClick={() => handleClickOpen(params.row.id)}>
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
      {isOpenForm ? (
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3,
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          اضافه کردن محصول جدید
        </Typography>
      ) : (
        ''
      )}
      <EditFormModal setEditModal={setEditModal} editModal={editModal} />
      {isOpenForm ? <AddProduct setIsOpenForm={setIsOpenForm} /> : ''}
      <Dialog
        open={confirmDelete.isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are You Sure You Want To Delete?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            آیا میخواهید آیتم {confirmDelete.id} حذف کنید؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={abortDeleteHanler}>لغو</Button>
          <Button onClick={deleteItem}>تایید</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
