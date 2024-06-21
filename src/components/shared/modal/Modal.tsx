import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BasicModaltype } from '@/types/types';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: grey[300],
  border: '1px solid #d6eed7',
  boxShadow: 24,
  p: 4,
  color: grey[900],
  borderRadius: '5px',
};

export default function BasicModal({ modal, setModal }: BasicModaltype) {
  const handleClose = () => setModal((prev) => ({ ...prev, isOpen: false }));
  React.useEffect(() => {
    if (modal.isOpen) {
      const timer = setTimeout(handleClose, 1500);
      return () => clearTimeout(timer);
    }
  }, [modal.isOpen]);

  return (
    <Modal
      sx={{ borderRadius: '40px' }}
      open={modal.isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, direction: 'rtl' }}
        >
          {modal.message}
        </Typography>
      </Box>
    </Modal>
  );
}
