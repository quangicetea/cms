import { Switch } from "@mui/material";
import { Divider, Table } from "antd";
import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const DataTable = ({ setFetchData, fetchData }) => {

  const [data, setData] = useState();
  const [field, setField] = useState({});
  const [switchValues, setSwitchValues] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onPageSizeChange = (current, size) => {
    setCurrentPage(1); // Reset to the first page when changing page size
    setPageSize(size);
  };

  const saveData = async (checked, recordID, BotName) => {
    
    const response = await fetch('/api/config/changeOnOffBot/', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        botname: BotName,
        status: checked ? 'mustRun' : 'mustStop',
        id: recordID,
      }),

    });

    const data = await response.json();
    setField({});
  };
  
  const handleSwitchChange = (event, recordID, BotName) => {

    const updatedSwitchValues = { ...switchValues, [recordID]: event.target.checked };
    setSwitchValues(updatedSwitchValues);

    const checked = event.target.checked;
    
    // On bot
    if (checked){
      saveData(true, recordID, BotName);
    }
    // Off bot
    else{
      saveData(false, recordID, BotName);
    }

  };

  const offConfig = async () => {
    
    console.log("off config");
  };

  const handleSwitchAllChange = (event) => {
    offConfig();
  };

  const columns = [
    {
      title: "",
      dataIndex: "id",
      render: (id, record) => <EditButton id={record.id} botname={record.botname} setField={setField}/>,
    },
    {
      title: "BotName",
      dataIndex: "botname",
      sorter: (a, b) => a.symbol.localeCompare(b.symbol),
      render: (text, record) => (
        <p>
          <Switch checked= { record.status === 'running' || record.status === 'mustRun' || record.status === 'runAgain' } onChange={(event) => handleSwitchChange(event, record.id, record.botname)}/>
          {record.botname}
        </p>
      ),
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      sorter: (a, b) => a.symbol.localeCompare(b.symbol)
    },
    {
      title: "Type",
      dataIndex: "tradeType",
      render: (text) => {
        return text === "long20x" ? (
          <p className="p-1 text-center text-green-400 uppercase border border-green-400 rounded-xl">
            {text}
          </p>
        ) : (
          <p className="p-1 text-center text-red-400 uppercase border border-red-400 rounded-xl">
            {text}
          </p>
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "amountlist",
      render: (text) => (
        <div className="flex flex-col items-center justify-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center">USDT</p>
        </div>
      ),
    },
    {
      title: "Oc",
      dataIndex: "oclist",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center">%</p>
        </div>
      ),
    },
    {
      title: "Interval",
      dataIndex: "interval",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center"></p>
        </div>
      ),
    },
    {
      title: "Extend",
      dataIndex: "extend",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center">%</p>
        </div>
      ),
    },
    {
      title: "TP",
      dataIndex: "takeProfit",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center">%</p>
        </div>
      ),
    },

    {
      title: "Reduce TP",
      dataIndex: "reduceTakeProfit",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center">%</p>
        </div>
      ),
    },
    {
      title: "Ignore",
      dataIndex: "ignore",
      render: (text) => (
        <div className="text-center">
          <p>{text}</p>
          <p className="text-xs font-bold text-center">%</p>
        </div>
      ),
    },
    {
      title: "Remove",
      dataIndex: "id",
      render: (id, record) => <DeleteButton setField={setField} id={id} botname={record.botname}/>,
    },
  ];
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/config/getData", {
          method: "GET", // Replace with the appropriate HTTP method (GET, POST, etc.)
          headers: {
            "Content-Type": "application/json", 
            "Cache-Control": "no-store",
          },
      });

      const data = await response.json();
      setData(data);
    };
    getData();
  }, [field, fetchData]);

  return (
    <div className="w-full">
      <Divider/>
      <div className="table-container">
      {data ? (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: data.length, // Replace this with the total number of items from your API or data source
          onChange: onPageChange,
          onShowSizeChange: onPageSizeChange,
        }}
      />
      ) : (
        <p>Loading data...</p>
      )}
      </div>
    </div>
  );
};

export default DataTable;