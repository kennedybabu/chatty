import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { AuthContext} from "./context/AuthContext";


function App() {
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
