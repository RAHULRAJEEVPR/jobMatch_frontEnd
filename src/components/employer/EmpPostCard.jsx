import React from "react";

export default function EmpPostCard({posts}) {
  return (
    <>
    {posts.map((post,index)=>(
 <div key={index}  className="bg-white md:mx-14 border grid md:grid-cols-2 m-3 md:p-4 p-3 shadow-xl border-gray-400 rounded-xl">
 <div className="flex flex-col">
   <div className="my-1">
   <span  className="md:text-3xl font-bold">Role : {post.role}</span>
  </div>
  <div className="my-1">
  <span   className="md:text-2xl text-blue-600  font-bold"><span className="text-black">Company :</span> {post.empId.cmpName}</span>
  </div>
  <div className="my-1">
  <span   className="md:text-2xl  font-bold">Location : {post.location}</span>
  </div>
  <div className="my-1">
  <span   className="md:text-2xl  font-bold">Total vacancy : {post.vacancy}</span>
  </div>
  <div className="my-1">
  <span   className="md:text-xl  font-bold">Required skills:{post.skills.map((skill,i)=>(
    <span key={i} className="bg-gray-400 ms-1 rounded-md text-white font-medium text-base px-1"> {skill}</span>
  ))}</span>
  </div>
   
 </div>
 <div className="flex flex-col">
   <div className="flex md:justify-end">

   <button className="bg-blue-900 text-white md:text-lg md:p-3 p-2 md:px-5 font-bold rounded-md">
     VIEW DETAILS
   </button>
   </div>
   <div  className="flex md:justify-end mt-auto me-9 ">
       <span   className="md:text-xl font-bold">Status :<span  className="text-green-500">{post.status}</span></span>
   </div>
 </div>
</div>
    ))}
   
    </>
  );
}
