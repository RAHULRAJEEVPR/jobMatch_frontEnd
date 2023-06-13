import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from '../components/user/Register'
import Login from '../components/user/Login'

export default function UserRoutes() {
  return (
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}
