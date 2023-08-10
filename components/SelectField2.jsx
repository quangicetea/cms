import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useController } from "react-hook-form";

export default function SelectField({
  name,
  control,
  errors,
  required,
  placeholder,
  selectOptions,
  disabled,
  label,
}) {
  const { field } = useController({
    name,
    rules: { required },
    control,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  if (!control) return;
  return (
    <div>
      <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
      <Select
        {...field}
        labelId="demo-controlled-open-select-label"
        name={name}
        id="demo-controlled-open-select"
        label={label}
        placeholder={placeholder}
        defaultValue=""
      >
        {selectOptions?.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
