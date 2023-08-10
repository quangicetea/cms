"use client";

import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  DesktopOutlined,
  FireOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import HeaderCustom from "./HeaderCustom";

export default function LayoutCustomMobile({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = React.useState(pathname);
  console.log(pathname);
  console.log(value);
  return (
    <>
      <HeaderCustom />
      <div className="mb-9">{children}</div>
      <div className="fixed bottom-0 w-full">
        <Box sx={{ width: "full" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              router.push(newValue);
            }}
          >
            <BottomNavigationAction
              value={"/profile"}
              label="Account"
              icon={<UserOutlined />}
            />
            <BottomNavigationAction
              value={"/userconfig"}
              label="User"
              icon={<DesktopOutlined />}
            />
            <BottomNavigationAction
              value={"/listconfig"}
              label="Trade Config"
              icon={<FireOutlined />}
            />
            <BottomNavigationAction
              value={"/purchase"}
              label="Purchase"
              icon={<SettingOutlined />}
            />
          </BottomNavigation>
        </Box>
      </div>
    </>
  );
}
