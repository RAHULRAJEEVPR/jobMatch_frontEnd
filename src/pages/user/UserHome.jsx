import React, { useEffect } from 'react'
import axios from 'axios'
import { isUserAuth } from '../../Services/userApi';


export default function UserHome() {
    const getData =

    async () => {
        try {
         isUserAuth().then((res)=>{
          console.log(res.data);
         })
         
        
          
        } catch (err) {
          console.log(err);
        }
      };
    useEffect(()=>{
getData()
    },[])
  return (
    <div>
      home
    </div>
  )
}
