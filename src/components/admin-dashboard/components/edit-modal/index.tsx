import AddProduct from '@/components/admin-dashboard/components/add-product-form/AddProduct';
import { EditModalType } from '@/types/types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: grey[300],
  border: '1px solid #d6eed7',
  boxShadow: 24,
  p: 4,
  color: grey[900],
  borderRadius: '5px',
};

export default function EditFormModal({
  editModal,
  setEditModal,
}: EditModalType) {
  const handleClose = () => setEditModal({ id: '', isOpen: false });

  return (
    <Modal
      sx={{ borderRadius: '40px' }}
      open={editModal?.isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box id="modal-modal-description" sx={{ mt: 2, direction: 'rtl' }}>
          <AddProduct editId={editModal.id} setEditModal={setEditModal} />
        </Box>
      </Box>
    </Modal>
  );
}
