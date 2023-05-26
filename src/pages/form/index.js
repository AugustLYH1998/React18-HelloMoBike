import React from 'react'
import { Outlet } from 'react-router-dom'

export default function JForm() {
  return (
    <div style={{ width: '100%' }}>
      {/* 就是为了渲染子路由 */}
      <Outlet />
    </div>
  )
}
