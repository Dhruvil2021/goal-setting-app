import React from 'react'
import LeftHandPanel from './LeftHandPanel'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <LeftHandPanel />
        <Outlet />
    </div>
  )
}

export default Layout