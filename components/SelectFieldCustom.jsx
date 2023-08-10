import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useController } from "react-hook-form";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const SelectFieldCustom = ({
  name,
  control,
  errors,
  required,
  placeholder,
  selectOptions,
  disabled,
  label,
}) => {
  const { field } = useController({
    name,
    rules: { required },
    control,
  });

  return (
    <div className="flex flex-col w-full">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          {...field}
          id="demo-controlled-open-select-label"
          name={name}
          size="small"
          label={label}
          // className="p-0 formInputText"
          placeholder={placeholder}
          //   defaultValue=""
        >
          {selectOptions?.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              // style={getStyles(name, personName, theme)}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFieldCustom;
