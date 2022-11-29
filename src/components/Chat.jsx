import React from 'react'
import {BsFillCameraVideoFill} from "react-icons/bs"
import {FaUserPlus} from "react-icons/fa"
import {FiMoreHorizontal} from "react-icons/fi"
import Messages from './Messages'
import Input from "./Input"


const Chat = () => {
  return (
    <div className='chat'>
      <div className='w-ful h-[60px] flex justify-between items-center px-4 bg-[#5d5b8d] rounded-tr-[10px]'>
        <span>kenny</span>
        <div className='flex h-full items-center text-gray-300'>
            <BsFillCameraVideoFill className='mx-2 cursor-pointer'/>
            <FaUserPlus className='mx-2 cursor-pointer'/>
            <FiMoreHorizontal className='mx-2 cursor-pointer'/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat