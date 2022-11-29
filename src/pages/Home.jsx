import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='bg-[#a7bcff] h-screen flex items-center justify-center'>
        <div className='w-[65%] h-[80%] border border-green-600 rounded-[10px] flex'>
            <Sidebar  />
            <Chat />
        </div>
    </div>
  )
}

export default Home