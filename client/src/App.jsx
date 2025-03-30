import React from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Landing from './components/Pages/landing'
import Mycart from './components/Pages/mycart'
import Myprofile from './components/Pages/myprofile'
import Signup from './components/Pages/signup';
import Login from './components/Pages/login';

function App() {

  return (
    <>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/mycart" element={<Mycart />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </>
  )
}

export default App
