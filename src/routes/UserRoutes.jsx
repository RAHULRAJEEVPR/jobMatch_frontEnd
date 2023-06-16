import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from '../pages/user/Register'
import Login from '../pages/user/Login'
import UserHome from '../pages/user/userHome'


export default function UserRoutes() {
  return (
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<UserHome/>}/>
    </Routes>
  )
}
