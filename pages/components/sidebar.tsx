"use client";
import { Row, Col, Checkbox, Slider, Button } from "antd";
import React, { useState, useEffect } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import style from "../../styles/Home.module.css";

export default function Sidebar({ getData }: any) {
  const [rangeVal, setRangeVal] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [isClicked, setIsClicked] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [size, setSize] = useState([
    { val: 35, isSelect: false },
    { val: 36, isSelect: false },
    { val: 37, isSelect: false },
    { val: 38, isSelect: false },
    { val: 39, isSelect: false },
    { val: 40, isSelect: false },
    { val: 41, isSelect: false },
    { val: 42, isSelect: false },
    { val: 43, isSelect: false },
    { val: 44, isSelect: false },
    { val: 45, isSelect: false },
    { val: 46, isSelect: false },
    { val: 47, isSelect: false },
    { val: 48, isSelect: false },
    { val: 49, isSelect: false },
  ]);
  const category = [
    "basketball",
    "lifestyle",
    "running",
    "skateboarding",
    "other",
  ];

  useEffect(() => {
    getData({ category: isChecked, size: isClicked, price: rangeVal });
  }, [isChecked, rangeVal, isClicked, size]);

  const formatter = (value: number) => `$ ${value * 1000}`;

  const handleSlider = (val) => {
    setRangeVal([val[0] * 100, val[1] * 1000]);
  };

  const handleCheckbox = (e: any) => {
    let val = e.target.value;
    if (isChecked.indexOf(val) == -1) {
      setIsChecked((prev) => [...prev, val]);
    } else {
      setIsChecked(isChecked.filter((item) => item !== val));
    }
  };

  const onClick = (param: number, index: number) => {
    updateSize(index);
    if (isClicked.indexOf(param) == -1) {
      setIsClicked((prev) => [...prev, param]);
    } else {
      setIsClicked(isClicked.filter((item) => item !== param));
    }
  };

  const updateSize = (index: number) => {
    const updatedSize = [...size];
    updatedSize[index].isSelect = size[index].isSelect ? false : true;
    setSize(updatedSize);
  };

  const handleIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const ButtonSize = () => (
    <Row>
      <Col span={24}>
        <div className={`${style.sidebarContainer} ${style.gridSize}`}>
          {size.map((item, index) => (
            <div key={index} className={style.itemSize}>
              <Button
                className={`${style.btnSize} ${
                  item.isSelect ? style.btnSizeSelect : ""
                }`}
                onClick={(e) => onClick(item.val, index)}
                size="small"
              >
                {item.val}
              </Button>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className={style.sidebarContainer}>
            <div
              className={style.categoryHeader}
              onClick={handleIsOpen}
              style={{ cursor: "pointer" }}
            >
              <span>Categories</span>
              {isOpen ? (
                <BsChevronCompactDown style={{ marginLeft: 10 }} />
              ) : (
                <BsChevronCompactUp style={{ marginLeft: 10 }} />
              )}
            </div>
            {isOpen && (
              <div>
                {category.map((item, index) => (
                  <div key={index}>
                    <Checkbox value={item} onChange={handleCheckbox}>
                      {item}
                    </Checkbox>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className={style.sidebarContainer}>
            <span>Price Range</span>
            <Slider
              range
              min={0}
              max={50}
              defaultValue={[10, 30]}
              trackStyle={{ background: "black" }}
              handleStyle={{ borderRadius: 20 }}
              tooltip={{ formatter }}
              onChange={(val: any) => {
                handleSlider(val);
              }}
            />
          </div>
        </Col>
      </Row>

      <ButtonSize />

      {/* <Row>
        <Col span={24}>
          <div className={`${style.sidebarContainer} ${style.gridSize}`}>
            {size.map((item, index) => (
              <div key={index} className={style.itemSize}>
                <Button
                  onClick={(e) => onClick(item)}
                  size="small"
                  style={{ backgroundColor: "lightgray" }}
                >
                  {item}
                </Button>
              </div>
            ))}
          </div>
        </Col>
      </Row> */}
    </div>
  );
}
