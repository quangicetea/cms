import { Switch } from "@mui/material";
import { Divider, Table } from "antd";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import AddUserConfig from "../components/userdata/AddUserConfig";
import DeleteButton from "../components/userdata/DeleteButton";
import EditButton from "../components/userdata/EditButton";

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

const DataTable = ({ setFetchData, fetchData }) => {

  const [userData, setUserData] = useState();
  const [field, setField] = useState({});
  const [balance, setBalance] = useState();

  const [open, setOpen] = React.useState(false);
  //const [fetchData, setFetchData] = React.useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showBalance = async () => {
    setBalance("Invalid!");
  }
const columnsMobile = [
  {
    title: "",
    dataIndex: "User",

    render: (text) => <EditButton setField={setField} User={text} />,
  },
  {
    title: "BotName",
    dataIndex: "User",
    render: (text) => (
      <p>
        {text}
      </p>
    ),
  },
  {
    title: "Telegram ID",
    dataIndex: "TeleID",
    render: (text) => (
      <div className="flex flex-col items-center justify-center">
        <p>{text}</p>
        <p className="text-xs font-bold text-center"></p>
      </div>
    ),
  },

  {
    title: "BALANCE",
    dataIndex: "web_token",
    render: (id, record) => (
      <div>
        { balance && id === idclick ? (
          // If the result exists for this row, show it
          <p> {balance} USDT </p>
        ) : (
          // Otherwise, show the button to trigger the action
          <Button type="primary" onClick={() => showBalance()}>
            SHOW
          </Button>
        )}
      </div>
    ),
  },
  //{
  //  title: "Remove",
  //  dataIndex: "id",
  //  render: (id) => <DeleteButton setField={setField} id={id} />,
  //},
];
  const columns = [
    {
      title: "",
      dataIndex: "User",

      render: (text) => <EditButton setField={setField} User={text} />,
    },
    {
      title: "BotName",
      dataIndex: "User",
      render: (text) => (
        <p>
          {text}
        </p>
      ),
    },
    {
      title: "Telegram ID",
      dataIndex: "TeleID",
      render: (text) => (
        <div className="flex flex-col items-center justify-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center"></p>
        </div>
      ),
    },
    {
      title: "API_KEY",
      dataIndex: "api_key",
      render: (text) => {
        const mLength = 5; // Maximum length for the visible text
        const ellipsisContractText = text.length > mLength ? `${text.slice(0, mLength)}...${text.slice(-mLength)}` : text;
        return <a> { ellipsisContractText } </a>;
      },
    },
    {
      title: "API_SECRET",
      dataIndex: "api_secret",
      ellipsis: true,
      render: (text) => {
        const mLength = 5; // Maximum length for the visible text
        const ellipsisContractText = text.length > mLength ? `${text.slice(0, mLength)}.....${text.slice(-mLength)}` : text;
        return <a href="#"> { ellipsisContractText } </a>;
      },
    },
    {
      title: "WEB_TOKEN",
      dataIndex: "web_token",
      ellipsis: true,
      render: (text) => {
        const mLength = 5; // Maximum length for the visible text
        const ellipsisContractText = text.length > mLength ? `${text.slice(0, mLength)}.....${text.slice(-mLength)}` : text;
        return <a> { ellipsisContractText } </a>;
      },
    },
    {
      title: "ProxyAddress",
      dataIndex: "proxyAddress",
      render: (text) => (
        <p>
          {text}
        </p>
      ),
    },
    {
      title: "BALANCE",
      dataIndex: "web_token",
      render: (id, record) => (
        <div>
          { balance && id === idclick ? (
            // If the result exists for this row, show it
            <p> {balance} USDT </p>
          ) : (
            // Otherwise, show the button to trigger the action
            <Button type="primary" onClick={() => showBalance()}>
              SHOW
            </Button>
          )}
        </div>
      ),
    },
    //{
    //  title: "Remove",
    //  dataIndex: "id",
    //  render: (id) => <DeleteButton setField={setField} id={id} />,
    //},
  ];

  useEffect(() => {

      const getUserData = async () => {

        const response = await fetch("/api/user/getUserData", {
          method: "GET", // Replace with the appropriate HTTP method (GET, POST, etc.)
          headers: {
            "Content-Type": "application/json", // Set the appropriate Content-Type header if you are sending JSON data in the request body
            "Cache-Control": "no-store",
          },
        });

        const userData = await response.json();
        setUserData(userData);

      };

      getUserData();

  }, [field, fetchData]);

  return (
    <>
          {/* Display the desktop footer on screens larger than sm (640px) */}
          <div className="hidden sm:block">
          <div className="w-full">
      <div
        className="fixed z-50 flex items-center justify-center w-10 h-10 text-xl text-white bg-green-400 rounded-full cursor-pointer bottom-5 right-5"
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
          <AddUserConfig setFetchData={setFetchData}></AddUserConfig>
        </Box>
      </Modal>

      <Divider />
      <div className="table-container2">
        <Table
          columns={columns}
          dataSource={userData}
          
        />
      </div>
    </div>
      </div>

      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block sm:hidden">
        <div className="mobile">
        <div className="table-container">
      <Table
      size="small"

        columns={columnsMobile}
        dataSource={userData}
        expandable={{
    expandedRowRender: (record,i) => (
      // Custom content to be displayed when the row is expanded
      <div>
      <p>API_KEY: {record.api_key} </p>
      <p>API_SECRET: {record.api_secret} </p>
      <p>WEB_TOKEN: {record.web_token} </p>
      <p>PROXY ADDRESS: {record.proxyAddress} </p>

      </div>
    ),
  }} 
      />
      </div>
        </div>
      </div>

    </>

  );
  
};

export default DataTable;
