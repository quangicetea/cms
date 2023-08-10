import React, { useState } from "react";
import ConfigUpdate from "./ConfigUpdate";

const UpdateConfig = ({ data, setField }) => {
  return (
    <div className="flex flex-col gap-3">
      <p>Edit A Trade Config</p>
      <div className="flex flex-col gap-4">
        <ConfigUpdate data={data} setField={setField}></ConfigUpdate>
      </div>
    </div>
  );
};

export default UpdateConfig;
