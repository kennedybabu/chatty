import React, { useContext, useState } from 'react'
import {BsPaperclip} from "react-icons/bs"
import {BiImageAdd} from "react-icons/bi"
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  const [error, setError] = useState('')

  const handleSend = async() =>{
    if(img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(          
        (error) => {
          setError(error)
        }, 
        () => {
      
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion ({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })             
          });
          
        }
      ); 

    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion ({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }
  };


  return (
    <div className='w-full rounded-br-[10px] flex bg-white px-4 py-2'>
      <input type="text" className='bg-white w-full h-[50px] p-2' placeholder='Message' value={text} onChange={(e) => setText(e.target.value)}/>
      <div className='flex items-center gap-2'>
        <BsPaperclip className='text-[24px] cursor-pointer text-gray-500'/>
        <label htmlFor="file"><BiImageAdd className='text-[24px] cursor-pointer text-gray-500' /></label>
        <input type="file" className='hidden' id='file' onChange={(e) => setImg(e.target.files[0])} />
        <button onClick={handleSend} className='px-[15px] py-[8px] bg-[#8da4f1] text-white'>send</button>
      </div>
    </div>
  )
}

export default Input