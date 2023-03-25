import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import style from '../../styles/Home.module.css'
import data from '../../data.json'

export default function Content() {
    const [shoes, setShoes] = useState(data.sneakers)
    const test = () => {
        console.log(shoes)
    }
    test();

    return (
        <div>
            <Row>
                <Col className={style.pad16}>
                    <span className={style.textHeader}>New Arrivals</span>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className={style.grid}>
                        {shoes.map((val, index) => (
                            <div className={style.item}>
                                <div className={style.itemHeader}>
                                    <span>{val.brand_name}</span>
                                    {/* <span>{val.name}</span> */}
                                </div>
                                <div className={style.itemBody}>
                                    <div className={style.imgContainer}>
                                        <img src={val.main_picture_url} alt="shoes" height={200} width={200} />
                                    </div>
                                    <div className={style.priceContainer}>
                                        <div className={style.price}>
                                            <span>Price</span>
                                            <span>${val.retail_price_cents}</span>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={val.main_picture_url} alt="shoes" height={50} width={50} />
                                                <img src={val.main_picture_url} alt="shoes" height={50} width={50} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
