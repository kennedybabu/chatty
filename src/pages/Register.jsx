import React from 'react'

const Register = () => {
  return (
    <div className='w-full h-screen bg-[#a7bcff] flex items-center justify-center'>
        <div className='flex bg-white rounded-md px-4 py-4 flex-col items-center w-[350px] mx-auto'>
            <p className='text-2xl font-bold'>chatty chat</p>
            <p>register</p>
            <form className='w-full px-2 py-4'>
                <input className="my-2 p-2 w-full bg-gray-300" type="text"  placeholder='display name'/>
                <input className="my-2 p-2 w-full bg-gray-300"  type="email" placeholder='email'/>
                <input className="my-2 p-2 w-full bg-gray-300"  type="password" placeholder='password'/>
                <input className="my-2"  type="file"  />
                <button className='w-full p-2 bg-red-400'>sign up</button>
            </form>
            <p>You do have an acc? Login</p>
        </div>
    </div>
  )
}

export default Register