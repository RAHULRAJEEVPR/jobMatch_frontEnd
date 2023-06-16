import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({role,route}) {
    const [auth,setAuth]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
if(role==="user"){
    const getData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8000/user/userinfo",
          
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("userJwt"),
              },
            }
          );
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
}
    })
  return (
    <div></div>
  )
}

export default PrivateRoute