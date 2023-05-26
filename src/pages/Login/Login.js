import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Checkbox, Form, Input, message, Image } from 'antd';
// import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux'
import { doLogin } from '../../store/userSlice'
// import { store } from '../../store';

import { UserOutlined, BugOutlined } from '@ant-design/icons';

import style from './Login.module.less'

export default function Login() {
  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage();


  let { rememeberMe, username, password, token } = useSelector(state => state.user)
  let state = useSelector(state => state.user)

  let user = {
    name: localStorage.getItem('username'),
    pw: localStorage.getItem('password'),
    tk: localStorage.getItem('token')
  }

  const onFinish = async (values) => {
    // console.log('Success:', values);
    setRemember(values.remember)

    // 存储用户信息
    let res = await dispatch(doLogin(values))

    // console.log(res);

    if (res.payload.code === 20000) {
      console.log(res);
      navigate('/admin/home')
    } else {
      // console.log(res);
      showMessage('error', res.payload.data)

    }
  };


  const showMessage = (type, mes) => {
    message[type](mes)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    console.log(state);
    if (rememeberMe) {
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      localStorage.setItem('token', token)
    }
    else {
      localStorage.setItem('username', '')
      localStorage.setItem('password', '')
    }
  }, [rememeberMe, password, username, token])

  return (
    <div className={style.wrapper}>
      <div className={style.img}>
        <Image width={200} preview="true" src="/assets/logo192.png" />
        <Image width={200} preview="true" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      </div>

      <Card className={style.card}>
        <Form
          className={style.box}
          name="basic"
          size="large"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            initialValue={user.name}
          >
            <Input prefix={<UserOutlined />} placeholder='Please input username' />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            initialValue={user.pw}
          >
            <Input.Password prefix={<BugOutlined />} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Card>

    </div >
  )
}



