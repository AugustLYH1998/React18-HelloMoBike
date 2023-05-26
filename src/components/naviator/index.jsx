import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import request from '../../utils/request'

import { useDispatch } from 'react-redux'
import { setCurrent } from '../../store/menuSlice'

import { Menu } from 'antd'


import './index.less'

function App() {

  const [menu, setMenu] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getMenu = async () => {
    try {
      const data = await request('/menu')
      data.menu = [...data.menu, {
        label: '测试通用组件',
        key: '/test',
        children: [{
          label: '表单生成器',
          key: '/test/form'
        }]
      }]
      setMenu( data.menu)

    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  const click = e => {
    // console.log(e.domEvent.target)
    // console.log(e);
    // console.log(menu);
    navigate('/admin' + e.key)
    dispatch(setCurrent(e.domEvent.target.innerText))
  }

  return (
    <>
      <div className="warpper__left__logo">
        {/* public 目录 最后会打包生成目录，一般我们会把静态资源放到 public下边，部署的时候public不会部署 */}
        <img src="/assets/logo-ant.svg" alt="CMS" />
        <h1>CMS</h1>
      </div>
      <Menu
        // 默认选中的
        // defaultSelectedKeys={['/home']}
        // 默认展开的菜单
        // defaultOpenKeys={['/ui']}
        // 垂直 水平 内嵌
        // mode="inline"
        items={menu}
        theme="dark"
        onClick={click}

      />
    </>
  )
}

export default App
