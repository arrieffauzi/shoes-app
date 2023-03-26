"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import style from "../../styles/Home.module.css";

export default function ListShoes({ shoes, searchValue, sidebarValue }: any) {
  const [listShoes, setListShoes] = useState([]);

  const filterName = (arr: any[]) => {
    return arr.filter(
      (el) =>
        el.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        el.brand_name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const filterCategory = (arr: any[]) => {
    return arr.filter((el) => sidebarValue.category.includes(el.category[0]));
  };

  const filterSize = (arr: any[]) => {
    return arr.filter((el) => sidebarValue.size.includes(el.size));
  };

  const filterPrice = (arr: any[]) => {
    return arr.filter((el) => {
      return (
        el.retail_price_cents < sidebarValue.price[1] &&
        el.retail_price_cents > sidebarValue.price[0]
      );
    });
  };

  useEffect(() => {
    let result = shoes;
    if (searchValue !== "") {
      result = filterName(result);
    }
    if (sidebarValue.size.length !== 0) {
      result = filterSize(result);
    }
    if (sidebarValue.price.length !== 0) {
      result = filterPrice(result);
    }
    if (sidebarValue.category.length !== 0) {
      result = filterCategory(result);
    }
    
    if (
      searchValue == "" &&
      sidebarValue.price.length == 0 &&
      sidebarValue.category.length == 0 &&
      sidebarValue.size.length == 0
    ) {
      setListShoes(shoes);
    } else {
      setListShoes(result);
    }
  }, [searchValue, sidebarValue]);

  return (
    <Row>
      <Col span={24}>
        <div className={style.grid}>
          {listShoes.map((val: any, index: number) => (
            <div className={style.item} key={index}>
              <div className={style.itemHeader}>
                <span className={style.name}>{val.name}</span>
                <span className={style.brand}>{val.brand_name}</span>
              </div>
              <div className={style.itemBody}>
                <div className={style.imgContainer}>
                  <img
                    src={val.main_picture_url}
                    alt="shoes"
                    height={200}
                    width={200}
                  />
                </div>
                <div className={style.priceContainer}>
                  <div className={style.price}>
                    <span>Price</span>
                    <span>${val.retail_price_cents}</span>
                  </div>
                  <div className={style.variantContainer}>
                    <div className={style.borderVariant}>
                      <img
                        src={val.main_picture_url}
                        alt="shoes"
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className={style.borderVariant}>
                      <img
                        src={val.main_picture_url}
                        alt="shoes"
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}
