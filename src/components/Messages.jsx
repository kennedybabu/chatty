import React from 'react'
import Message from "./Message"

const Messages = () => {
  return (
    <div className='bg-[#ddddf7] p-[10px] messages overflow-y-scroll'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message /> 
        <Message /> 
        <Message />
    </div>
  )
}

export default Messages