import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useEffect, useState } from "react";
import AddConfig from "../components/AddConfig";
import DataTable from "../components/DataTable";
import PlusCircleOutlined from "@ant-design/icons";
import DataTableMobile from './../components/DataTableMobile';
import { useRouter } from 'next/router';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  minWidth: "80%", // Adjust the maximum width based on the screen size
  maxHeight: "80%", // Adjust the maximum height based on the screen size
  overflow:"auto"
};

const ListConfig = () => {
  
  const [open, setOpen] = React.useState(false);
  const [fetchData, setFetchData] = React.useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full">
      <div
        className="fixed right-0 z-50 flex items-center justify-center text-white bg-green-400 rounded-full cursor-pointer w-7 h-7 sm:w-10 sm:h-10 sm:text-xl bottom-44"
        onClick={handleOpen}
      >
        <p>+</p>
      </div>
      <Modal
        open={open}
        keepMounted={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddConfig setFetchData={setFetchData}></AddConfig>
        </Box>
      </Modal>
      <div className="w-full">
        <div className="hidden sm:block">
          <DataTable fetchData={fetchData} setFetchData={setFetchData}></DataTable>
        </div>
        <div className="sm:hidden">
          <DataTableMobile fetchData={fetchData}  setFetchData={setFetchData}/>
        </div>
      </div>
    </div>
  );
};


export default ListConfig;