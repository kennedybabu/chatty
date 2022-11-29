import React from 'react'

const Chats = () => {
  return (
    <div className='w-full flex items-center my-2 cursor-pointer p-2 hover:bg-[#2f2d52]'>
      <div className='bg-red-500 w-[50px] h-[50px] rounded-full '>
          img
      </div>
      <div className='ml-2'>
        <span className='text-white font-bold'>kenny</span>
        <p className='text-sm text-gray-200'>hello...</p>
      </div>
    </div>
  )
}

export default Chats