"use client";
import React, { useState } from "react";
import style from "../../styles/Home.module.css";
import Content from "./content";
import Sidebar from "./sidebar";

export default function Body({ searchValue }: any) {
  const [data, setData] = useState({ size: [], category: [], price: [] });

  const getDataSidebar = (data: any) => {
    setData(data);
  };
  return (
    <div className={style.body}>
      <div className={style.sidebar}>
        <Sidebar getData={getDataSidebar} />
      </div>
      <div className={style.content}>
        <Content searchValue={searchValue} sidebarValue={data} />
      </div>
    </div>
  );
}
