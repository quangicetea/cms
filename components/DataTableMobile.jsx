import { Switch } from "@mui/material";
import { Divider, Table,Select, Space,Input } from "antd";
const { Search } = Input;

import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { MenuOutlined, MoreOutlined } from "@ant-design/icons";

const DataTableMobile = ({fetchData,setFetchData}) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => console.log(value);
const [data, setData] = useState();
const [field, setField] = useState({});
const [switchValues, setSwitchValues] = useState({});
  
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
  
  const columns = [
    {
      title: "",
      dataIndex: "id",
      width: 0,
      render: (id, record) => <EditButton setField={setField} id={id} botname={record.botname}/>,
    },
    {
      title: "BotName",
      key: 'botName',
      dataIndex: "botName",

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
      key: 'symbol',

      dataIndex: "symbol",
      sorter: (a, b) => a.symbol.localeCompare(b.symbol)
    },
    // {
    //   title: "Type",
    //   dataIndex: "tradeType",
    //   render: (text) => {
    //     return text === "long20x" ? (
    //       <p className="p-1 text-center text-green-400 uppercase border border-green-400 rounded-xl">
    //         {text}
    //       </p>
    //     ) : (
    //       <p className="p-1 text-center text-red-400 uppercase border border-red-400 rounded-xl">
    //         {text}
    //       </p>
    //     );
    //   },
    // },
    

   
    // {
    //   title: "Remove",
    //   dataIndex: "id",
    //   render: (id, record) => <DeleteButton setField={setField} id={id} botname={record.botname}/>,
    // },
  ];
console.log(data);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/config/getData", {
          method: "GET", // Replace with the appropriate HTTP method (GET, POST, etc.)
          headers: {
            "Content-Type": "application/json", // Set the appropriate Content-Type header if you are sending JSON data in the request body
            "Cache-Control": "no-store",
          },
      });

      const data = await response.json();
      setData(data);

    };
    getData();
  }, [field,fetchData]);
  return (
    <div className="w-full p-4">
    <div className="flex flex-row justify-end gap-3 mb-5">
    <Select className="block"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'mexcV3',
          label: 'MexcV3',
        },
        {
          value: 'asc',
          label: 'ASC',
        },
        {
          value: 'dsc',
          label: 'DSC',
        },

      ]}
    />
<div>
<Select
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'all',
          label: 'All',
        },
        {
          value: 'asc',
          label: 'ASC',
        },
        {
          value: 'dsc',
          label: 'DSC',
        },

      ]}
    />
    </div>

</div>
      <div className="flex mb-5">
      <Search placeholder="Search" onSearch={onSearch} style={{ width: 200 }} />
      <div className="flex items-center justify-center">
      <MoreOutlined />
      </div>
      <div className="flex items-center justify-center">
      <MenuOutlined />
      </div>
      </div>
      <div className="table-container">
      <Table
      size="small"
        columns={columns}
        dataSource={data}
        expandable={{
    expandedRowRender: (record,i) => (
      // Custom content to be displayed when the row is expanded
      <div>
        <p>Symbol: {record.symbol}</p>
        <p>Amount: {record.amountlist} USDT</p>
        <p>OC: {record.oclist} %</p>
        <p>Extend: {record.extend} %</p>
        <p>TP: {record.takeProfit} %</p>
        <p>Reduce TP: {record.reduceTakeProfit} %</p>
        <p>Ignore: {record.ignore} %</p>
      </div>
    ),
  }} 
      />
      </div>
    </div>
  );
};
export default DataTableMobile;
