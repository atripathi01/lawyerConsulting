import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 500,
  width: 800,
  maxWidth: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:"15px",
  p: 4,
'@media (max-width: 400px)': {
    width: 300,
    padding: '16px',
  },
};

interface ModelProps {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  children: any;
}
export default function BasicModal({
  handleClose,
  open,
  children,
}: ModelProps) {
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{children}</Box>
      </Modal>

  );
}
