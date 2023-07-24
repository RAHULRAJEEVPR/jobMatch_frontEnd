import React from 'react'
import EmpNavbar from '../../components/employer/navBat/EmpNavbar'
import { Outlet } from 'react-router-dom'
export default function EmpLayout() {
  return (
    <div className=" bg-main_bg h-full ">
     <EmpNavbar/> 
     <div>{<Outlet/>}</div>
    
    </div>
  )
}
