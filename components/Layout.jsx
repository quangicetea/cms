import {
  FileOutlined,
  UserOutlined,
  FireOutlined,
  DesktopOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import HeaderCustom from "./HeaderCustom";
import Image from "next/image";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <>
      <Link href="/profile">Account</Link>
    </>,
    "1",
    <UserOutlined />
  ),
  getItem(
    <>
      <Link href="/userconfig" >User Information</Link>
    </>,
    "2",
    <DesktopOutlined />
  ),
  getItem(
    <>
      <Link href="/listconfig">Trade Config</Link>
    </>,
    "3",
    <FireOutlined />
  ),
  getItem(
    <>
      <Link href="/purchase">Purchase</Link>
    </>,
    "4",
    <SettingOutlined />
  ),
];

const LayoutCustom = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        theme="light"
        className="pt-20 text-gray-400 "
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-horizontal" />
        <Menu
          theme="light"
          className="text-gray-400"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        <div className="p-3">
          <p>Expired Date: Jun 11,2023</p>
          <p>
            Contract:{" "}
            <a className="text-primary" href="">
              MexcBot
            </a>
          </p>
          <p>
            Telegram:{" "}
            <a className="text-primary" href="">
              MexcBot
            </a>
          </p>
          
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <HeaderCustom></HeaderCustom>
        </Header>
        <Content
          style={{
            margin: "0 16px",
            background: "transparent",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutCustom;
