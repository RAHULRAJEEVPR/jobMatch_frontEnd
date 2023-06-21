import React from 'react'
import { Route,Routes } from 'react-router-dom'
import EmpRegister from '../pages/employer/empRegister'
import EmpEmailVerify from '../components/EmailVerify/EmpEmailVerify'
import EmpHome from '../pages/employer/EmpHome'
import EmpLogin from '../pages/employer/empLogin'

export default function EmpRoutes() {
  return (
    <Routes>
    <Route path='/register' element={<EmpRegister/>}/>
    <Route path="/login" element={<EmpLogin/>}/>
     <Route path='/home' element={<EmpHome/>}/>
     <Route path='/:id/verify/:token' element={<EmpEmailVerify/>}/>
    </Routes>
  )
}
