import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='flex items-center text-white justify-between bg-[#2f2d52] h-[60px] p-[10px] rounded-tl-[10px]'>
      <span className='font-bold'>chatty chat</span>
      <div className='flex items-center gap-[10px]'>
          <span>Kenny</span>
          <button onClick={() => signOut(auth)} className='bg-white text-black text-sm p-[5px] rounded-sm'>logout</button>
      </div>
    </div>
  )
}

export default Navbar