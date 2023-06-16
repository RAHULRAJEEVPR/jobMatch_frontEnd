import React, { useEffect } from 'react'
import axios from 'axios'

export default function UserHome() {
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
    useEffect(()=>{
getData()
    },[])
  return (
    <div>
      home
    </div>
  )
}
