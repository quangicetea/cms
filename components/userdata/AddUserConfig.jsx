import React, { useState } from "react";
import ConfigUserForm from "./ConfigUserForm";

const AddUserConfig = ({ data, setFetchData }) => {
  const [configData, setConfigData] = useState({});

  return (
    <div className="flex flex-col gap-3">
      <p>Create A New Bot</p>
      <div className="flex flex-col gap-4">
        <ConfigUserForm setFetchData={setFetchData} />
      </div>
    </div>
  );
};

export default AddUserConfig;
