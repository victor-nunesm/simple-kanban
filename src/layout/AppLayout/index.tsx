import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/AppHeader'

const Layout: React.FC<any> = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
