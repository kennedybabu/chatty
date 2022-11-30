import React, {useContext} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='flex items-center text-white justify-between bg-[#2f2d52] h-[60px] p-[10px] rounded-tl-[10px]'>
      <span className='font-bold'>chatty chat</span>
      <div className='flex items-center gap-[10px]'>
          <div className='w-[25px] h-[25px] rounded-full'>
              <img src={currentUser.photoURL} alt="/" className='rounded-full' />
          </div>
          <span>{currentUser.displayName}</span>
          <button onClick={() => signOut(auth)} className='bg-white text-black text-sm p-[5px] rounded-sm'>logout</button>
      </div>
    </div>
  )
}

export default Navbar