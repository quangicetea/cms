import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Switch from "@mui/material/Switch";
import * as React from "react";
import SelectField from "./SelectField";
import TextFieldCustom from "./TextFieldCustom";
const fs = require("fs");
const label = { inputProps: { "aria-label": "Switch demo" } };
export default function ConfigUpdate({ data: configData, setField }) {
  
  const optionsSymbol = [
    {id: 162, value: '1000000FLOKICEO_USDT', label: '1000000FLOKICEO_USDT'},
{id: 116, value: '1000000OGGY_USDT', label: '1000000OGGY_USDT'},
{id: 160, value: 'ZRX_USDT', label: 'ZRX_USDT'},
  ];

  const optionsTradeType = [
    { id: 3, value: "both", label: "Both" },
  ];
  
  const optionsInterval = [
    { id: 1, value: "Min1", label: "1min" },
  ];

  const [symbol, setSymbol] = React.useState(configData?.symbol);
  const [botname, setBotname] = React.useState(configData?.botname);
  const [tradeType, setTradeType] = React.useState(configData?.tradeType);
  const [oclist, setOclist] = React.useState(configData?.oclist);
  const [extend, setExtend] = React.useState(configData?.extend);
  const [amountlist, setAmountList] = React.useState(configData?.amountlist);
  const [takeProfit, setTakeprofit] = React.useState(configData?.takeProfit);
  const [reduceTakeProfit, setreduceTakeProfit] = React.useState(configData?.reduceTakeProfit);
  const [ignore, setIgnore] = React.useState(configData?.ignore);
  const [interval, setInterval] = React.useState(configData?.interval);

  const data = {
    symbol,
    tradeType,
    amountlist,
    oclist,
    interval,
    extend,
    takeProfit,
    reduceTakeProfit,
    ignore
  };

  function isFloatOrInt(input) {
    // Regular expression to match a floating-point number or an integer
    const regex = /^[-+]?\d+(\.\d+)?$/;
  
    // Test the input against the regex
    return regex.test(input);
  }

  const saveData = async () => {

    if ( isFloatOrInt(oclist) && isFloatOrInt(extend) && isFloatOrInt(takeProfit) 
          && isFloatOrInt(reduceTakeProfit) && isFloatOrInt(amountlist) && isFloatOrInt(ignore) 
          && isFloatOrInt(extend) && extend >= 0 && extend <=100 ) 
    {  
        console.log("update data");
    }
  };

  const handleCreateConfig = async () => {
    saveData();
  };

  return (
    <div>
      <SelectField
        value={symbol}
        setValue={setSymbol}
        label={"Choose a symbol"}
        options={optionsSymbol}
      />
      <SelectField
        value={tradeType}
        setValue={setTradeType}
        label={"Trade Type"}
        options={optionsTradeType}
      />
      <SelectField
        value={interval}
        setValue={setInterval}
        label={"Interval"}
        options={optionsInterval}
      />
      <div className="w-full sm:grid sm:grid-cols-2 sm:gap-6">
        <TextFieldCustom
          label={"OC"}
          setValue={setOclist}
          value={oclist}
        ></TextFieldCustom>
        <TextFieldCustom
          label={"Extend"}
          setValue={setExtend}
          value={extend}
        ></TextFieldCustom>
      </div>
      <TextFieldCustom
        label={"Amount"}
        setValue={setAmountList}
        value={amountlist}
      ></TextFieldCustom>
      <div className="w-full sm:grid sm:grid-cols-2 sm:gap-6">
        <TextFieldCustom
          label={"Take Profit"}
          setValue={setTakeprofit}
          value={takeProfit}
        ></TextFieldCustom>
        <TextFieldCustom
          label={"Reduce Take Profit"}
          setValue={setreduceTakeProfit}
          value={reduceTakeProfit}
        ></TextFieldCustom>
      </div>
      <TextFieldCustom
        label={"Ignore"}
        setValue={setIgnore}
        value={ignore}
      >
      </TextFieldCustom>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Save as default" />
      </FormGroup>
      <Button onClick={handleCreateConfig}> Update</Button>
    </div>
  );
}
