import React, {useState} from 'react'
import {FcAddImage} from 'react-icons/fc'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, db } from '../firebase'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc, setDoc} from "firebase/firestore"
import { useNavigate } from 'react-router-dom';



const Register = () => {

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]


    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)


        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

     
        uploadTask.on(          
          (error) => {
            setError(error)
          }, 
          () => {
        
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
              await updateProfile(response.user,{
                displayName,
                photoURL: downloadURL
              })
              await setDoc(doc(db, "users", response.user.uid ),{
                uid: response.user.uid,
                displayName,
                email,
                photoURL:downloadURL
              })

              await setDoc(doc(db,'userChats', response.user.uid), {

              })
              navigate('/')
               
            });
          }
        );
    } catch(err) {
      setError(err)
    }
   
  }



  return (
    <div className='w-full h-screen bg-[#a7bcff] flex items-center justify-center'>
        <div className='flex bg-white rounded-md px-4 py-4 flex-col items-center w-[350px] mx-auto'>
            <p className='text-2xl font-bold text-[#5d5b8d]'>chatty chat</p>
            <p className='text-gray-500'>register</p>
            <form className='w-full px-2 py-4' onSubmit={handleSubmit}>
                <input className="my-2 p-2 w-full border-b-2 border-[#a7bcff]" type="text"  placeholder='display name'/>
                <input className="my-2 p-2 w-full border-b-2 border-[#a7bcff]"  type="email" placeholder='email'/>
                <input className="my-2 p-2 w-full border-b-2 border-[#a7bcff]"  type="password" placeholder='password'/>
                <input className="my-2 hidden" id='file' type="file"  />
                <label className='flex items-center my-2 cursor-pointer' htmlFor="file"><FcAddImage className='text-4xl mr-2' /><span className='text-[12px] text-gray-500'>Add an avatar</span></label>
                <button className='w-full p-2 bg-red-400'>sign up</button>
            </form>
            <p>You do have an acc? Login</p>
        </div>
      </div>
  )
}

export default Register