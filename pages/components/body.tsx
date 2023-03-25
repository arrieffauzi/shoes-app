import React from 'react'
import style from '../../styles/Home.module.css'
import Content from './content'
import Sidebar from './sidebar'

export default function Body() {
  return (
      <div className={style.flexRow}>
          <div style={{ flex: .4 }}>
              <Sidebar />
          </div>
          <div style={{ flex: 1 }}>
              <Content />
          </div>
      </div>
  )
}
