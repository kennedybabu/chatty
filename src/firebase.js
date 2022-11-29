// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2pvsqybCZ7qECOg5kwttevmcPmu7_XDI",
  authDomain: "chatty-79752.firebaseapp.com",
  projectId: "chatty-79752",
  storageBucket: "chatty-79752.appspot.com",
  messagingSenderId: "555928922299",
  appId: "1:555928922299:web:ddad0c6417cad5e773a19e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage()
export const db = getFirestore()