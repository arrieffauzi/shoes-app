import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Header from './components/header'
import Body from './components/body'

export default function Home() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}
