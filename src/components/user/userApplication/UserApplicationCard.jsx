import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';



export default function UserApplicationCard({ posts ,status}) {
  const userData = useSelector((state) => state.user.userData);
console.log(userData);
     const navigate=useNavigate()

     const navigateToProfile = (id) => {
        navigate("/user/employer/profile",{state:{id}});
      };
      
      
  return (
    <div>
     <div className="">
      { posts.map((post, index) => (
        <div
          key={index}
          className="bg-white md:mx-24 border  grid md:grid-cols-2 m-3 md:p-4 p-3 shadow-xl border-gray-400 rounded-xl"
        >
          <div className="flex flex-col">
            <div className="my-1">
              <span className="md:text-3xl text-stone-950 font-bold">
                Role : {post.role}
              </span>
            </div>
            <div className="my-1">
              <span onClick={() => navigateToProfile (post.empId._id)} className="md:text-2xl text-blue-600 cursor-pointer hover:text-blue-800 font-bold">
                <span className="text-black cursor-default">Company :</span>{" "}
                {post.empId.cmpName}
              </span>
            </div>
            <div className="my-1">
              <span className="md:text-2xl  font-bold">
                Location : {post.location}
              </span>
            </div>
            <div className="my-1">
              <span className="md:text-2xl  font-bold">
                Total vacancy : {post.vacancy}
              </span>
            </div>
            <div className="my-1">
              <span className="md:text-xl  font-bold">
                Required skills:
                {post.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-400 ms-1 rounded-md text-white font-medium text-base px-1"
                  >
                    {" "}
                    {skill}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
           
            <div className="flex md:justify-end  me-9 ">
              <span className="md:text-xl font-bold">
               Application Status :
              </span><span className="md:text-xl font-bold  text-green-500">
              {post.applicants
  .filter((applicant) => applicant.applicant === userData._id)
  .map((applicant) => (
    <span key={applicant._id} className="md:text-xl font-bold text-green-500">
      {applicant.status}
    </span>
  ))}                </span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
