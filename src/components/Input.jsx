import React from 'react'
import {BsPaperclip} from "react-icons/bs"
import {BiImageAdd} from "react-icons/bi"

const Input = () => {
  return (
    <div className='w-full rounded-br-[10px] flex bg-white px-4 py-2'>
      <input type="text" className='bg-white w-full h-[50px] p-2' placeholder='Message'/>
      <div className='flex items-center gap-2'>
        <BsPaperclip className='text-[24px] cursor-pointer text-gray-500'/>
        <label htmlFor="file"><BiImageAdd className='text-[24px] cursor-pointer text-gray-500' /></label>
        <input type="file" className='hidden' id='file' />
        <button className='px-[15px] py-[8px] bg-[#8da4f1] text-white'>send</button>
      </div>
    </div>
  )
}

export default Input