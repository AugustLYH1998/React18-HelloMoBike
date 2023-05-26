import Header from '@/header'
import { Col, Row } from 'antd'
import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Footer from './components/footer'
import Naviator from './components/naviator/index.jsx'
// import routes from './router'

import './Admin.less'

export default function Admin() {
  // const router = useRoutes(routes)

  return (
    <div className="warpper">
      {/* 建立row */}
      <Row>
        <Col span="4" className="warpper__left">
          <Naviator />
        </Col>

        <Col span="20" className="warpper__right">
          {/* 右边头部 */}
          <Header />
          <Row className="warpper__right__content">

            <Outlet></Outlet>

          </Row>
          <Footer />
        </Col>
      </Row>
    </div>
  )
}
