import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Switch from "@mui/material/Switch";
import SelectField from "../SelectField";
import TextFieldCustom from "../TextFieldCustom";
import * as React from "react";
const fs = require("fs");
const label = { inputProps: { "aria-label": "Switch demo" } };
import TextField from "@mui/material/TextField";

export default function ConfigUpdate({ data: configData, setField }) {

  const [User, setUser] = React.useState(configData?.User);
  const [TeleID, setTeleID] = React.useState(configData?.TeleID);
  const [api_key, setApi_key] = React.useState(configData?.api_key);
  const [api_secret, setApi_secret] = React.useState(configData?.api_secret);
  const [web_token, setWeb_token] = React.useState(configData?.web_token);
  const [proxyAddress, setProxyAddress] = React.useState(configData?.proxyAddress);

  const userData = {
    User,
    TeleID,
    api_key,
    api_secret,
    web_token,
    proxyAddress
  };

  const saveData = async () => {

    if ( User != "" && TeleID != "" && api_key != "" && api_secret != "" && web_token != "" ) 
    {  
        console.log("update");
    }
  };

  const handleUpdateUserData = async () => {
    saveData();
  };

  return (
    <div>
      <div className="w-full sm:grid sm:grid-cols-2 sm:gap-6">
      <TextField
        value={User}
        setValue={setUser}
        label={"Bot Name"}
        readOnly
      />
        <TextFieldCustom
          label={"Telegram ID"}
          setValue={setTeleID}
          value={TeleID}
        ></TextFieldCustom>
      </div>

      <div className="w-full sm:grid sm:grid-cols-2 sm:gap-6">
        <TextFieldCustom
          label={"API KEY"}
          setValue={setApi_key}
          value={api_key}
        ></TextFieldCustom>      
        <TextFieldCustom
        label={"API SECRET"}
        setValue={setApi_secret}
        value={api_secret}
        ></TextFieldCustom>
      </div>

      <div className="w-full sm:grid sm:grid-cols-2 sm:gap-6">
        <TextFieldCustom
          label={"WEB TOKEN"}
          setValue={setWeb_token}
          value={web_token}
        ></TextFieldCustom>
      </div>

      <div className="w-full sm:grid sm:grid-cols-2 sm:gap-6">
        <TextFieldCustom
          label={"PROXY ADDRESS"}
          setValue={setProxyAddress}
          value={proxyAddress}
        ></TextFieldCustom>
      </div>

      <Switch {...label} defaultChecked />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Save as default" />
      </FormGroup>
      <p>Please contact the Administrator to Edit Information</p>
      <Button onClick={handleUpdateUserData}> Update</Button>
    </div>
  );
}
