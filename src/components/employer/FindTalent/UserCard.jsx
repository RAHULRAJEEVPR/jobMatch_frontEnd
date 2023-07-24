import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { empInviteUser,empCreateChat } from "../../../Services/EmpApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";




export default function UserCard({ userData,postData,set }) {
  const empData = useSelector((state) => state.emp.empData);

    const navigate = useNavigate();
  
    const navigateToProfile = ( id) => {
      navigate("/employer/applicants/profile",{state:{id}});
    };
    const invite=(userId,postId)=>{
        empInviteUser({userId,postId}).then((res)=>{
            set(res.data.postData)
            toast.success("invited")
        }).catch((err)=>{
            toast.error("internal server error")
            console.log(err);
        })
    }

    const newChat=(senderId,receiverId)=>{
      
      empCreateChat({senderId:senderId,receiverId:receiverId}).then((res)=>{
console.log(res.data)
let data=res.data.chatData
console.log(data,"data avunindo");
navigate("/employer/message",{state:{data}})
      }).catch((err)=>{
        toast.error("something wend wrong")
      })
    }
  return (


    <div>
      {
        userData.map((user, i) => (
          <div
            key={i}
            className="bg-white md:mx-28 mt-3 border flex flex-wrap mb-3 m-1 md:p-4 p-3 shadow-xl border-gray-400 rounded-lg"
          >
            <div className="w-full md:w-3/4">
              <div className="">
                <h1 className="md:text-3xl font-bold">{user.name}</h1>
              </div>
              <div className="mt-2">
                <span className="font-serif font- text-lg">
                {user.about}
                </span>
              </div>
              <div className="my-1">
                <span className="md:text-xl  font-bold">
                  skills:
                  {user.skills.map((skill,i)=>(

                  <span key={i} className="bg-gray-600 ms-1   rounded-md text-white font-medium text-base px-2">
                    {skill}
                  </span>
                  ))}                  
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="flex md:flex-col m">
                <div className="md:ms-auto">
                  <button onClick={() => navigateToProfile (user._id)} className="bg-blue-950 hover:bg-blue-800 text-white px-4 py-1 rounded-md font-semibold md:text-lg">
                    Profile
                  </button>
                </div>
                <div className="ms-auto md:my-2">
                  <button  onClick={()=>newChat(empData._id,user._id)} className="bg-blue-950 hover:bg-blue-800 text-white px-6 py-1 rounded-md font-semibold md:text-lg">
                    Chat
                  </button>
                </div>
                <div className="ms-auto">
                   {postData.invites.some(invite => invite.userId == user._id) ?   <button  className="bg-blue-950 hover:bg-blue-800 text-white px-5 py-1 rounded-md font-semibold md:text-lg">
                    Invited
                  </button>:<button onClick={()=>invite(user._id,postData._id)} className="bg-blue-950 hover:bg-blue-800 text-white px-5 py-1 rounded-md font-semibold md:text-lg">
                    Invite
                  </button>} 
                 
                </div>
              </div>
            </div>
          </div>
        ))
        
        }
    </div>
  );
}
