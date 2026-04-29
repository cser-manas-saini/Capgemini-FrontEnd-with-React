import React from 'react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>THIS IS HOMEPAGE</h1>
      <Outlet />
    </>
  )
}

export default HomePage