import React from 'react'
import { useRoutes } from 'react-router-dom'
import myRoutes from './router/index'
import  RouterGurad  from './router/RoutingGuard'


export default function MyIndex() {


    // return (
    //     useRoutes(myRoutes)
    // )


    return <RouterGurad routers={myRoutes} />
}
