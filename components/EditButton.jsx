import { EditOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import UpdateConfig from "./UpdateConfig";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minWidth: "80%", // Adjust the maximum width based on the screen size
  maxHeight: "80%", // Adjust the maximum height based on the screen size
  overflow:"auto"
};

export default function EditButton({ id, botname, setField }) {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button onClick={handleOpen}>
        <EditOutlined />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateConfig setField={setField} data={data} />
        </Box>
      </Modal>
    </div>
  );
}
