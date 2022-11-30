import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Routes, Route, BrowserRouter } from "react-router-dom"
import { AuthContext} from "./context/AuthContext";


function App() {
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser)
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
