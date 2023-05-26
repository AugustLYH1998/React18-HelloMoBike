import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function NotFound() {

  const navigate = useNavigate()

  const back = () => {

    navigate('/')
  }

  const backHome = () => {
    navigate('/admin/home')
  }

  const isVisiable = localStorage.getItem('token') ? 'block' : 'none'
  const isVisiable2 = localStorage.getItem('token') ? 'none' : 'block'





  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        height: 'calc(62vh)',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px'
      }}
    >
      <h1>this page is not found...</h1>

      <Button onClick={backHome} type='primary' style={{ display: isVisiable }}>go to home</Button>
      <Button onClick={back} type='primary' style={{ display: isVisiable2 }}>go to login</Button>

    </div>
  )
}
