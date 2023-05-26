import React, { useState, useEffect, } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Row, Col, Card, Button, Avatar } from 'antd'
// import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setUserToken } from '../../store/userSlice'


import request from '../../utils/request'

import { store } from '../../store';

import moment from 'moment'
// 引入中文
import 'moment/locale/zh-cn'
import './index.less'
// 设置中文
moment.locale('zh-cn')


export default function Header() {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const locale = useLocation()

  // 获取当前时间
  const getTime = () => {
    return moment().format('dddd h:mm:ss a')
  }



  // const [name, setName] = useState(store.getState().user.username)

  // const { name } = useSelector(state => state.user)
  const name = localStorage.getItem('username')

  const [time, setTime] = useState(getTime())
  const [weather, setWeather] = useState()

  const menu = useSelector(state => state.menu)

  useEffect(() => {
    const timer = setInterval(() => {
      const time = getTime()
      setTime(time)
    }, 1000)
    // 组件卸载之前执行的清理机制
    return () => {
      clearInterval(timer)
    }
  }, [])


  const getWeather = async () => {
    try {
      const data = await request('/weather')
      setWeather(data.weather)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getWeather()
  }, [])

  const doLogout = () => {
    localStorage.removeItem('token')

    // 设置登录状态为false
    dispatch(setUserToken(false))

    navigate('/')
  }

  return (
    <div className="warpper__right__header">
      {/* 欢迎 */}
      <Row className="warpper__right__top">
        <Col span="24">
          <Avatar
            style={{
              backgroundColor: '#f56a00',
              verticalAlign: 'middle',
            }}
            size="large"
          >
            {name}
          </Avatar>
          <span>

            欢迎 | {name}

          </span>
          {/* <a href="/">退出</a> */}
          <Button type="link" onClick={doLogout}>注销</Button>
        </Col>
      </Row>
      {/* 面包屑 */}
      <Row className="warpper__right__breadcrumb">
        <Col span="4" className="breadcrumb__title">
          {menu.current}
        </Col>

        <Col span="20" className="warpper__right__weather">
          <span className="weather__date">{time}</span>
          <span className="weather__weather__detail">天气：{weather}</span>
        </Col>
      </Row>
    </div>
  )
}
