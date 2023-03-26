import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import style from "../../styles/Home.module.css";
import { BsSearch } from "react-icons/bs";

export default function Header({ getValue }: any) {
  const changeHandle = (e: any) => {
    getValue(e.target.value);
  };

  return (
    <Row className={style.borderHeader} style={{ padding: "10px" }}>
      <Col span={5}>
        <div className={style.titleContainer}>
          <span>Shoe.</span>
        </div>
      </Col>{" "}
      <Col
      span={17}
        style={{ marginLeft: 10, display: "flex", alignItems: "center" }}
      >
        <div style={{ width: "100%" }}>
          <Input
            placeholder="search"
            prefix={<BsSearch />}
            onChange={changeHandle}
          />
        </div>
      </Col>
    </Row>
  );
}
