import { onSnapshot ,doc } from 'firebase/firestore'
import React,{ useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'

const Chats = () => {
  const [chats, setChats] = useState([])
  const {currentUser} = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      }
    }

    currentUser.uid && getChats()
  },[currentUser.uid])

  console.log(Object.entries(chats))

  const handleSelect = (u) => {
    dispatch({
      type: "CHANGE_USER", 
      payload: u
    })
  }

  return (
    <div >
      {/* <div className='bg-red-500 w-[50px] h-[50px] rounded-full '>
          
      </div>
      <div className='ml-2'>
        <span className='text-white font-bold'>kenny</span>
        <p className='text-sm text-gray-200'>hello...</p>
      </div> */}

      {Object.entries(chats)?.map(chat => (
        <div onClick={() => handleSelect(chat[1].userInfo)} className='w-full flex items-center my-2 cursor-pointer p-2 hover:bg-[#2f2d52]' key={chat[0]}>
          <div className='h-[50px] rounded-full '>
              <img src={chat[1].userInfo.photoURL} alt="/" className='w-full h-full rounded-full' />
          </div>
          <div className='ml-2'>
            <span className='text-white font-bold'>{chat[1].userInfo.displayName}</span>
            <p className='text-sm text-gray-200'>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>     
      ))}
    </div>
  )
}

export default Chats