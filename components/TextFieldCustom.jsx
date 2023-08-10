import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
const TextFieldCustom = ({ value, setValue, label }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box
      component="form"
      className="w-full"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        className="w-full"
        value={value}
        onChange={handleChange}
        label={label}
        variant="standard"
      />
    </Box>
  );
};

export default TextFieldCustom;
