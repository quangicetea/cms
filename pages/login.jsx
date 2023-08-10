import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from '../styles/LoginButton.module.css';
import { Button, Checkbox, Form, Input } from "antd";

const login = () => {

  const router = useRouter();
  const handleConfig = () => {
    router.push('/listconfig');
  };

  const handleUser = () => {
    router.push('/userconfig');
  };
  
  return (
    <div className="md:w-[420px] mt-14 mx-auto">
      <div className="">
        <h3 className="mb-2 text-2xl font-bold">Welcome to BOT</h3>
        <p>URL verification: https://bot.co</p>
        <Button onClick={handleUser}>Go to User</Button>
        <p>                                 </p>
        <Button onClick={handleConfig}>Go to Config</Button>
      </div>
    </div>
  );
};

export default login;
