import React, { useEffect } from 'react'
import axios from 'axios'
import { isUserAuth } from '../../Services/userApi';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/user/navbar/NavBar';


export default function UserHome() {

  return (
    <div className=" bg-main_bg w-screen overflow-hidden  ">
    <NavBar/>
    <div>{<Outlet />}</div>
    </div>
  )
}
