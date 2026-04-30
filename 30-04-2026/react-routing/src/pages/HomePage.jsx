import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <div>
        <Link to="/" >Home Hero</Link>
        <Link to="kitchen" >Hero Kitchen</Link>
      </div>
      <Outlet />
      <h3>This is end of Home</h3>
    </div>
  )
}

export default HomePage