import React from 'react'


const Login = () => {
  return (
    <div className='w-full h-screen bg-[#a7bcff] flex items-center justify-center'>
        <div className='flex bg-white rounded-md px-4 py-4 flex-col items-center w-[350px] mx-auto'>
            <p className='text-2xl font-bold text-[#5d5b8d]'>chatty chat</p>
            <p className='text-gray-500'>login</p>
            <form className='w-full px-2 py-4'>
                <input className="my-2 p-2 w-full border-b-2 border-[#a7bcff]"  type="email" placeholder='email'/>
                <input className="my-2 p-2 w-full border-b-2 border-[#a7bcff]"  type="password" placeholder='password'/>
                <button className='w-full p-2 bg-red-400'>sign up</button>
            </form>
            <p>You don't have an acc? Sign Up</p>
        </div>
    </div>    
  )
}

export default Login