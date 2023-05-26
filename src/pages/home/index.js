import React from 'react'
import {Image } from 'antd';

import style from './home.module.less'

export default function Home() {
  return (
    <div className={style.wrapper}>

      <div className={style.img}>
        <Image width={200} preview="true" src="/assets/logo192.png" />

      </div>


      <h1>

        Welcome! 
        


      </h1>

      <h1>管理后台</h1>
    </div>
  )
}
