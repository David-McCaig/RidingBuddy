import { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import DashBoard from './Pages/DashBoard' 
import SetUpProfilePage from './Pages/SetUpProfilePage'
import PostARide from './Pages/PostARidePage'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
      <Route path='/dashboard' element={<DashBoard/>} />
      <Route path='/setprofile' element={<SetUpProfilePage/>} />
      <Route path='/postaride' element={<PostARide/>} />
    </Routes>
    </>
  )
}

export default App
