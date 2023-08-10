import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Switch from "@mui/material/Switch";
import * as React from "react";
import generateId from "../../utils";
import SelectField from "../SelectField";
import TextFieldCustom from "../TextFieldCustom";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function ConfigUserForm({ data: configData, setFetchData }) {
  
  const [User, setUser] = React.useState("");
  const [TeleID, setTeleID] = React.useState("");
  const [api_key, setApi_key] = React.useState("");
  const [api_secret, setApi_secret] = React.useState("");
  const [web_token, setWeb_token] = React.useState("");
  const [proxyAddress, setProxyAddress] = React.useState("");
  
  const userData = {
    User,
    TeleID,
    api_key,
    api_secret,
    web_token,
    proxyAddress
  };
  
  const saveData = async () => {

    if ( User != "" && TeleID != "" && api_key != "" && api_secret != "" && web_token != "" && proxyAddress != "") 
    {  
        console.log("add user");
    }
  };

  const handleCreateConfig = async () => {
    saveData();
  };

  return (
    <div>
      <div className="w-full sm:grid sm:grid-cols-2 sm:gap-6">
      <TextFieldCustom
        value={User}
        setValue={setUser}
        label={"Enter BotName"}
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
      <Button onClick={handleCreateConfig}> Create</Button>
    </div>
  );
}
