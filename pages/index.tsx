"use client";
import React, { useState } from "react";
import Header from "./components/header";
import Body from "./components/body";

export default function Home() {
  const [value, setValue] = useState("");

  const getData = (data: string) => {
    setValue(data);
  };

  return (
    <div>
      <Header getValue={getData} />
      <Body searchValue={value} />
    </div>
  );
}
