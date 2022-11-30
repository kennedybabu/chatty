import React, {useState} from 'react'
import {collection, query, where, getDocs } from "firebase/firestore"
import {db} from "../firebase"

const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

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

  return (
    <div className='w-full'>
      <div>
          <input type="text" onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} className='w-full text-white outline-none bg-transparent p-2' placeholder='find a user' />
      </div>
      {/* userchat */}    
     { user && 
     <div className='flex  w-full h-[60px] px-2 items-center hover:bg-[#2f2d52]'>
          <div className='w-[50px] h-[50px] rounded-full'>
              <img className='w-full h-full rounded-full' src={user.photoURL} alt="/" />
          </div>
          <div className='ml-2'>
            <span>{user.displayName}</span>
          </div>
      </div>}
    </div>
  )
}

export default Search