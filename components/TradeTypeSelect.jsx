import React from "react";
import SelectField from "./SelectField";

const TradeTypeSelect = ({ control, errors, register }) => {
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
  return (
    <div className="flex w-[320px]">
      <SelectField
        labelId="demo-controlled-open-select-label"
        label="Symbol"
        id="demo-controlled-open-select"
        control={control}
        errors={errors}
        name="Trade type"
        register={register}
        selectOptions={options}
      />
    </div>
  );
};

export default TradeTypeSelect;
