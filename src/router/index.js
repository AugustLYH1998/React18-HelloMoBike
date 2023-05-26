import Home from '../pages/home'
import NotFound from '../pages/NotFound'
import Ui from '../pages/ui'
import JButton from '../pages/ui/button'
import Modal from '../pages/ui/modals'
import JLoading from '../pages/ui/loading'
import Notification from '../pages/ui/notification'
import Message from '../pages/ui/message'
import Tab from '../pages/ui/tabs'
import Gallery from '../pages/ui/gallery'
import JCarousel from '../pages/ui/carousel'
import JForm from '../pages/form'
import Login from '../pages/form/login'
import Register from '../pages/form/register'
import Tables from '../pages/table'
import Basic from '../pages/table/basic'
import High from '../pages/table/high'
import RichText from '../pages/rich'
import City from '../pages/city'
import Order from '../pages/order/index'
import Detail from '../pages/order/detail'
import User from '../pages/user'
import UserDetail from '../pages/user/detail'
import BikeMap from '../pages/map'
import Charts from '../pages/charts'
import Bar from '../pages/charts/bar'
import Pie from '../pages/charts/pie'
import Line from '../pages/charts/line'
import Permission from '../pages/permission'
import { lazy } from 'react';

import Admin from '../Admin'
const MyLogin = lazy(() => import('../pages/Login/Login'));
const Test = lazy(() => import('../pages/test/index'));
const Form = lazy(() => import('../pages/test/form'));
const NotLogin = lazy(() => import('../pages/NotLogin'));

const routes = [
  // 首页
  {
    path: '/',
    element: <MyLogin />,
    // auth 是否需要权限校验
    auth: false
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'home',
        element: <Home />
        , auth: true
      },

      // ui
      {
        path: 'ui',
        element: <Ui />,
        // 子路由
        children: [
          {
            path: 'buttons',
            element: <JButton />
            , auth: true
          },
          {
            path: 'modals',
            element: <Modal />
            , auth: true
          },
          {
            path: 'loadings',
            element: <JLoading />
            , auth: true
          },
          {
            path: 'notification',
            element: <Notification />
            , auth: true
          },
          {
            path: 'messages',
            element: <Message />
            , auth: true
          },
          {
            path: 'tabs',
            element: <Tab />
            , auth: true
          },
          {
            path: 'gallery',
            element: <Gallery />
            , auth: true
          },
          {
            path: 'carousel',
            element: <JCarousel />
            , auth: true
          }
        ]
        , auth: true
      },
      {
        path: 'form',
        element: <JForm />,
        children: [
          {
            path: 'login',
            element: <Login />
            , auth: true
          },
          {
            path: 'reg',
            element: <Register />
            , auth: true
          }
        ]
        , auth: true
      },
      {
        path: 'table',
        element: <Tables />,
        children: [
          {
            path: 'basic',
            element: <Basic />
            , auth: true
          },
          {
            path: 'high',
            element: <High />
            , auth: true
          }
        ]
        , auth: true
      },
      // 富文本
      {
        path: 'rich',
        element: <RichText />
        , auth: true
      },
      {
        path: 'city',
        element: <City />
        , auth: true
      },
      {
        path: 'detail',
        element: <Order />
        , auth: true
      },
      {
        path: 'detail/:id',
        element: <Detail />
        , auth: true
      },
      {
        path: 'user',
        element: <User />
        , auth: true
      },
      {
        path: 'user/detail/:id',
        element: <UserDetail />
        , auth: true
      },
      {
        path: 'bikeMap',
        element: <BikeMap />
        , auth: true
      },
      {
        path: 'charts',
        element: <Charts />,
        children: [
          {
            path: 'bar',
            element: <Bar />
          },
          {
            path: 'pie',
            element: <Pie />
          },
          {
            path: 'line',
            element: <Line />
          }
        ]
      },
      {
        path: 'permission',
        element: <Permission />
        , auth: true
      },
      {
        path: 'test',
        element: <Test />,
        children: [
          {
            path: 'form',
            element: <Form />
            , auth: true
          },
        ]
        , auth: true
      },


    ],
    auth: true
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path:'/notLogin',
    element: <NotLogin />
  }


]

export default routes

/*
子路由不带 / 以相对路径进行访问
ui/buttons

子路由带 / 以绝对路径进行访问，加上 / 不会拼接上父级路由的path路径

*/
