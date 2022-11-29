import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center text-white justify-between bg-[#2f2d52] h-[60px] p-[10px] rounded-t-[10px]'>
      <span className='font-bold'>chatty chat</span>
      <div className='flex items-center gap-[10px]'>
          <span>Kenny</span>
          <button className='bg-white text-black text-sm p-[5px] rounded-sm'>logout</button>
      </div>
    </div>
  )
}

export default Navbar