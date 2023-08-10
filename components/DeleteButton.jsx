import { DeleteOutlined } from "@mui/icons-material";
import React from "react";

const DeleteButton = ({ botname, id, setField }) => {
  
  const handleDelete = async (id) => {
    console.log("Delte id: ", id);
  };

  return (
    <button onClick={() => handleDelete(id)}>
      <DeleteOutlined />
    </button>
  );
};

export default DeleteButton;
