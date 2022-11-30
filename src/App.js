import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>

    </>
  );
}

export default App;
