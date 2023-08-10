import React, { useState } from "react";
import ConfigForm from "./ConfigForm";

const AddConfig = ({ data,setFetchData }) => {
  
  return (
    <div className="flex flex-col gap-3">
      <p>Create A New Trade Config</p>
      <div className="flex flex-col gap-4">
        <ConfigForm setFetchData={setFetchData} />
      </div>
    </div>
  );
};

export default AddConfig;
