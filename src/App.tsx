import { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import LoginPage from './features/authentication/Login'
import SignUpPage from './Pages/SignUpPage'
import DashBoard from './Pages/DashBoard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
      <Route path='/dashboard' element={<DashBoard/>} />
    </Routes>
    </>
  )
}

export default App
