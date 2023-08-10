import React from "react";
import SelectField from "./SelectField";

const SymbolSelect = ({ control, errors, register, setValue }) => {
  const options = [
    {
      label: "Ethereum",
      value: 1,
    },
    {
      label: "BSC",
      value: 2,
    },
  ];
  if (!control) return;
  return (
    <div className="flex w-[320px]">
      <SelectField
        labelId="demo-controlled-open-select-label"
        label="Symbol"
        id="demo-controlled-open-select"
        control={control}
        errors={errors}
        name="symbol"
        register={register}
        selectOptions={options}
      />
    </div>
  );
};

export default SymbolSelect;
