import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Spin } from 'antd'
import { persistor, store } from './store'

import MyIndex from './myIndex'


// 加载样式文件
import 'antd/dist/reset.css'
import './load.less'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>

      {/* 数据持久化 */}
      <PersistGate persistor={persistor}>
        {/* <Admin /> */}
        <Suspense
          fallback={
            <div>
              <h1>加载中...Loading</h1>
              <Spin className='load' />
            </div>

          }
        >
          <MyIndex />
        </Suspense>
      </PersistGate>

    </Provider>
  </BrowserRouter>
)
