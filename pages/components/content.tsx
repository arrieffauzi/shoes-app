"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import style from "../../styles/Home.module.css";
import data from "../../data.json";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import ListShoes from "./listShoes";

export default function Content({ searchValue, sidebarValue }: any) {
  let shoes: Shoes[] = data.sneakers;
  var val = 35;
  shoes.forEach((el, index) => {
    if (index == 0) {
      el.size = val;
      val++;
    } else {
      if (val == 46) {
        val = 35;
        el.size = val;
      } else {
        el.size = val;
        val++;
      }
    }
  });
  const [sortPrice, setSortPrice] = useState("desc");

  const sorting = () => {
    if (sortPrice == "desc") {
      setSortPrice("asc");
      shoes.sort((a, b) => a.retail_price_cents - b.retail_price_cents);
    } else {
      setSortPrice("desc");
      shoes.sort((a, b) => b.retail_price_cents - a.retail_price_cents);
    }
    sortPrice == "desc" ? setSortPrice("asc") : setSortPrice("desc");
  };

  return (
    <div>
      <Row>
        <Col span={12} className={style.pad16}>
          <span className={style.textHeader}>New Arrivals</span>
        </Col>
        <Col span={12} className={style.sort}>
          <span
            className={style.pointer}
            onClick={() => {
              sorting();
            }}
          >
            Sort by Price
            {sortPrice == "desc" ? (
              <BsChevronCompactDown style={{ marginLeft: 10 }} />
            ) : (
              <BsChevronCompactUp style={{ marginLeft: 10 }} />
            )}
          </span>
        </Col>
      </Row>

      <ListShoes
        shoes={shoes}
        searchValue={searchValue}
        sidebarValue={sidebarValue}
      />
    </div>
  );
}
