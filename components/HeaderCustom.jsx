import { Button } from "antd";
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef  } from "react";
import Logo from "../icons/Logo";

const HeaderCustom = () => {

  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Send a logout request to the server
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok) {
        router.push('/login');
      } else {
        // Handle logout error
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between h-[50px] bg-white rounded-xl max-w-full py-10 px-2 sm:p-10  items-center">
        <div>
          {/* Your other JSX content */}
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTQ2IDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDIuMzg1NSAxOS40Njg1TDMzLjA2OTggMy4zMDkyN0MzMS4wMjc1IC0wLjA1ODcyMjkgMjYuMDQ3MiAtMC4wOTQ1NTM1IDI0LjA3NjUgMy40NTI1OUwxNC4yOTUgMjAuMjU2N0MxMi40Njc3IDIzLjMzODEgMTQuNzI1IDI3LjIwNzcgMTguMzc5NiAyNy4yMDc3SDM3Ljk3ODVDNDEuNjY4OSAyNy4yMDc3IDQ0LjQyNzggMjMuMjMwNiA0Mi4zODU1IDE5LjQ2ODVaIiBmaWxsPSIjMzE1NkFBIi8+CjxwYXRoIGQ9Ik0yOC45NTA3IDIwLjcyMzFMMjguMzc3NCAxOS43MTk5QzI3Ljg0IDE4Ljc4ODMgMjYuNjU3NiAxNi43ODE4IDI2LjY1NzYgMTYuNzgxOEwxOC43NzUxIDMuMDk0ODVDMTYuNzMyOCAwLjA0OTMyNjcgMTEuODk1NyAtMC4yMDE0ODIgOS44NTM0NSAzLjYzMjNMMC42ODEwMzQgMTkuNTA0OUMtMS4yMTc5NCAyMi44MzcgMS4wMzkzMyAyNy4xNzI0IDUuMTU5NzUgMjcuMjA4M0gyNC42NTExSDMyLjk2MzZIMzcuOTA4MUMzMi44NTYxIDI3LjI0NDEgMzEuMjQzOCAyNC42Mjg1IDI4Ljk1MDcgMjAuNzIzMVoiIGZpbGw9IiMxOTcyRTIiLz4KPHBhdGggZD0iTTI4Ljk1MSAyMC43MjI5TDI4LjM3NzcgMTkuNzE5N0MyNy44NDAyIDE4Ljc4ODEgMjYuNjU3OSAxNi43ODE3IDI2LjY1NzkgMTYuNzgxN0wyMS41NyA3LjgyNDIyTDE0LjI2MDggMjAuMjkzQzEyLjQzMzUgMjMuMzc0MyAxNC42OTA3IDI3LjI0MzkgMTguMzQ1NCAyNy4yNDM5SDI0LjYxNTZIMzIuOTI4MUgzNy45MDg0QzMyLjgyMDYgMjcuMjA4MSAzMS4yNDQxIDI0LjYyODQgMjguOTUxIDIwLjcyMjlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTQxNV8zODMzNSkiLz4KPHBhdGggZD0iTTEyNC4zNjIgMTQuODAyNkMxMjQuNDA0IDIxLjA5NjUgMTI5LjUyMyAyNi4wNDc2IDEzNS44MTcgMjUuOTYzN0MxMzkuNzE5IDI1Ljk2MzcgMTQyLjc0IDI0LjYyMSAxNDUuMDA2IDIxLjk3NzZMMTQzLjU3OSAyMC43NjA4QzE0Mi42NTYgMjAuMDA1NiAxNDEuMzU1IDE5Ljk2MzYgMTQwLjQzMiAyMC42NzY5QzEzOS4xNzMgMjEuNiAxMzcuNjIxIDIyLjEwMzUgMTM1Ljc3NSAyMi4xMDM1QzEzMS40MTEgMjIuMTAzNSAxMjguNjg0IDE5LjI5MjIgMTI4LjY4NCAxNC43MTg3QzEyOC42ODQgMTAuMTg3MSAxMzEuMzI3IDcuNTAxNzcgMTM1Ljc3NSA3LjUwMTc3QzEzNy41NzkgNy41MDE3NyAxMzkuMTczIDcuOTYzMzEgMTQwLjQzMiA4LjkyODM3QzE0MS4zOTcgOS42NDE2NyAxNDIuNjk4IDkuNTk5NzIgMTQzLjU3OSA4Ljg0NDQ1TDE0NS4wMDYgNy42Mjc2NEMxNDIuNzQgNC45NDIyNiAxMzkuNTkzIDMuNTU3NjIgMTM1LjYwNyAzLjU1NzYyQzEzMi4yMDggMy41NTc2MiAxMjkuMzU1IDQuNjA2NTkgMTI3LjM4MyA2LjUzNjcxQzEyNS40MTEgOC41MDg3OCAxMjQuMzYyIDExLjM2MiAxMjQuMzYyIDE0LjgwMjZaIiBmaWxsPSIjMTUxNjE3Ii8+CjxwYXRoIGQ9Ik02NS40OTI4IDIzLjQwNDRMNzEuNDUxIDEyLjk5ODZWMjUuNjcwMkg3NS45ODI1VjMuODA5NTdINzMuMTcxM0M3Mi4yOTAyIDMuODA5NTcgNzEuNDUxIDQuMjcxMTIgNzEuMDMxNCA1LjA2ODM0TDYzLjg5ODMgMTguMDc1Nkw1Ni43NjUzIDUuMDY4MzRDNTYuMzQ1NyA0LjI3MTEyIDU1LjUwNjUgMy44MDk1NyA1NC42MjU0IDMuODA5NTdINTEuODE0MVYyNS42NzAySDU2LjM0NTdWMTIuOTk4Nkw2Mi4zMDM5IDIzLjQwNDRINjUuNDkyOFoiIGZpbGw9IiMxNTE2MTciLz4KPHBhdGggZD0iTTc5LjcxNjMgMy44NTEwN1YyNS43MTE3TDk3Ljg4NDYgMjUuNjY5OFYyNC4yODUxQzk3Ljg4NDYgMjMuMTk0MiA5Ny4wMDM0IDIyLjMxMyA5NS45MTI1IDIyLjMxM0g4NC4yNDc5VjE2LjQzODhIOTUuOTEyNVYxMy4wODIxSDg0LjI0NzlWNy4yMDc4SDk1LjkxMjVDOTcuMDAzNCA3LjIwNzggOTcuODg0NiA2LjMyNjY2IDk3Ljg4NDYgNS4yMzU3MlYzLjg1MTA3SDc5LjcxNjNaIiBmaWxsPSIjMTUxNjE3Ii8+CjxwYXRoIGQ9Ik0xMTkuNzA2IDMuODUxMDdIMTIzLjk4NUwxMTUuMzQyIDE0Ljg0NDNMMTI0LjAyNyAyNS43NTM3SDExOS43NDhDMTE4Ljk1IDI1Ljc1MzcgMTE4LjIzNyAyNS4zNzYgMTE3LjczMyAyNC43ODg2TDExMi41MzEgMTguMjg1TDEwNy4zNyAyNC43NDY3QzEwNi44NjYgMjUuMzc2IDEwNi4xNTMgMjUuNzExNyAxMDUuMzU2IDI1LjcxMTdIMTAxLjA3NkwxMDkuNzYxIDE0LjgwMjRMMTAxLjA3NiAzLjg5MzAzSDEwNS4zNTZDMTA2LjE1MyAzLjg5MzAzIDEwNi44NjYgNC4yMjg3MSAxMDcuMzcgNC44NTgwOUwxMTIuNTMxIDExLjMxOThMMTE3LjY5MiA0LjgxNjEzQzExOC4xOTUgNC4xODY3NSAxMTguOTA4IDMuODUxMDcgMTE5LjcwNiAzLjg1MTA3WiIgZmlsbD0iIzE1MTYxNyIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzU0MTVfMzgzMzUiIHgxPSIxMS42NTk0IiB5MT0iMTQuNjI3NiIgeDI9IjM0LjMwMzEiIHkyPSIyMi45OTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyNjRDQTIiIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyMzQ1ODgiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
            alt="SVG Image"
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          <Button className="flex items-center px-3 py-2 text-sm font-semibold border rounded-lg border-primary text-primary">
            <p>MEXC BOT</p>
          </Button>
              <Button className="flex items-center px-3 py-2 text-sm font-semibold border rounded-lg border-primary text-primary"
              onClick={handleLogout}
              >
              LOG OUT
              </Button>    
        </div>
      </div>
    </div>
  );
};

export default HeaderCustom;
