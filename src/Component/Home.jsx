import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex h-screen'>
        <div className='w-[20%] border border-black p-4 flex flex-col text-center gap-4'>
          <Link to="/home/dashboard">Dashboard</Link>
          <Link to="/home/about">About</Link>
          <Link to="/home/contact">Contact</Link>
        </div>
        <div className='flex-1 border border-black p-4'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home