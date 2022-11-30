import React, {useContext, useState} from 'react'
import {collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore"
import {db} from "../firebase"
import { AuthContext } from '../context/AuthContext'

const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async (e) => {
    const q = query(collection(db, "users"),where("displayName", "==" , username ))

    try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      setUser(doc.data())
    })
    } catch(err) {
      setError(err)
    }
  }


  const handleKey = (e) => {
    e.code === "Enter"  && handleSearch()
  }

  const handleSelect = async (e) => {
    //check wether the grp exists
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid

    try {
      const response = await getDoc(doc(db,"chats", combinedId))

      if(!response.exists()){
        await setDoc(doc(db, "chats", combinedId), {messages:[]})

        await updateDoc(doc(db, "userChats", currentUser.uid ), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })

        await updateDoc(doc(db, "userChats", user.uid ), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })
      }
    } catch(err) {
      setError(err)
    }
    setUser(null)
    setUsername('')
  }

  return (
    <div className='w-full'>
      <div>
          <input type="text" value={username} onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} className='w-full text-white outline-none bg-transparent p-2' placeholder='find a user' />
      </div>
      {/* userchat */}    
     { user && 
     <div className='flex  w-full h-[60px] px-2 items-center hover:bg-[#2f2d52]' onClick={() => handleSelect()}>
          <div className='w-[50px] h-[50px] rounded-full'>
              <img className='w-full h-full rounded-full px-2' src={user.photoURL} alt="/" />
          </div>
          <div className='ml-2'>
            <span>{user.displayName}</span>
          </div>
      </div>}
    </div>
  )
}

export default Search