import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from '../pages/user/Register'
import Login from '../pages/user/Login'
import UserHome from '../pages/user/userHome'
import EmailVerify from '../components/EmailVerify/emailVerify'
import Formik from '../pages/user/Formik'


export default function UserRoutes() {
  return (
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<UserHome/>}/>
    <Route path='/:id/verify/:token' element={<EmailVerify/>}/>
    <Route path='/formik' element={<Formik/>}/> 
    </Routes>
  )
}
