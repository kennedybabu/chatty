import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message])

  return (
    <div className={`flex mb-2 gap-3 message ${message.senderId === currentUser.uid  &&  "owner"}`}>
      <div className='flex flex-col text-gray-400'>
        <div className='w-[30px] h-[30px] rounded-full'>
          <img className='w-full h-full rounded-full' src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="/" />
        </div>
        <span className='text-sm'>just now</span>
      </div>
      <div className='content w-full'>
      { message.text && <p className='bg-white max-w-[max-content] px-[20px] py-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]'>{message.text}</p>
}        {message.img && 
        <div className='w-[50%] h-[100px] my-1 mb-[50px]'>
            <img src={message.img} alt="/" className='w-full'/>
        </div>}
      </div>
    </div>
  )
}

export default Message