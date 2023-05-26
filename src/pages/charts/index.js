import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Charts() {
  return (
    <div style={{ width: '100%' }}>
      <Outlet />
    </div>
  )
}
