import React from 'react'

const Message = () => {
  return (
    <div className='flex mb-2 gap-3 owner'>
      <div className='flex flex-col text-gray-400'>
        <div className='w-[50px] h-[50px] bg-red-400 rounded-full'>
          
        </div>
        <span className='text-sm'>just now</span>
      </div>
      <div>
        <p className='bg-white px-[20px] py-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]'>hello</p>
      </div>
    </div>
  )
}

export default Message