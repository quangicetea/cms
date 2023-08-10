import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectField = ({ value, setValue, label, options }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth variant="standard" sx={{ m: 1 }}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          className="w-full"
          value={value}
          onChange={handleChange}
        >
          {options.map((x) => (
            <MenuItem value={x.value}>{x.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectField;
