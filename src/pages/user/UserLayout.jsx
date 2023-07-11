import React, { useEffect } from 'react'
import axios from 'axios'
import { isUserAuth } from '../../Services/userApi';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/user/navbar/NavBar';


export default function UserHome() {

  return (
    <div className=" bg-main_bg overflow-hidden ">
      <div className='z-100'>

    < NavBar/>
      </div>
    <div>{<Outlet />}</div>
    </div>
  )
}
