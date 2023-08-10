import { DeleteOutlined } from "@mui/icons-material";
import React from "react";

const DeleteButton = ({ id, setField }) => {
  
  const handleDelete = async (id) => {

    console.log("Delete rows: ", id);
    const response = await fetch('/api/user/deleteUserDataDB/', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),

    });
    
    const data = await response.json();
    setField({});

  };

  return (
    //<button onClick={() => handleDelete(id)}>
    <button>
      <DeleteOutlined />
    </button>
  );
};

export default DeleteButton;
