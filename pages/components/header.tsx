import React from 'react'
import { Col, Row } from 'react-bootstrap'
import style from '../../styles/Home.module.css'

export default function Header() {
  return (
      <Row className={style.borderHeader} style={{ padding: '10px' }}>
          <Col xs={4}>
              <div className={style.titleContainer}>
                  <span>Shoe.</span>
              </div>
          </Col> <Col>
              <div className="mb-3">
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="search" />
              </div>
          </Col>
      </Row>
  )
}
