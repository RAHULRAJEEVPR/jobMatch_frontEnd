import React, { useEffect, useState } from "react";
import { revenue,userCount,empCount } from "../../Services/adminApi";

export default function DashStates() {
  const [userCounts,setUserCount]=useState(0)
  const [empCounts,setEmpCount]=useState(0)
  const [revenuee,setRevenue]=useState(0)
  useEffect(()=>{
    revenue().then((res)=>{
      setRevenue(res.data.revenue)
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
    userCount().then((res)=>{
      setUserCount(res.data.count)
      console.log(res.data);

    }).catch((err)=>{
      console.log(err);
    })
    empCount().then((res)=>{
      setEmpCount(res.data.count)
      console.log(res.data);

    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className="flex sm:flex-row flex-col sm:space-x-8 mx-8 justify-center">
    {/* Total Users */}
    <div className="bg-slate-600 sm:w-2/6 flex flex-col items-center justify-center py-8 px-8 rounded-lg text-white">
      <h1 className="text-3xl font-semibold">Total Users</h1>
      <h1 className="text-5xl  py-4 font-bold">{userCounts}</h1>
    </div>

    {/* Revenue */}
    <div className="bg-slate-600 sm:w-2/6 flex flex-col items-center justify-center py-8 px-8 rounded-lg text-white">
      <h1 className="text-3xl font-semibold">Revenue</h1>
      <h1 className="text-5xl py-4 font-bold">₹{revenuee}</h1>
    </div>

    {/* Employers */}
    <div className="bg-slate-600 sm:w-2/6 flex flex-col items-center justify-center py-8 px-8 rounded-lg text-white">
      <h1 className="text-3xl font-semibold">Employers</h1>
      <h1 className="text-5xl py-4 font-bold">{empCounts}</h1>
    </div>
  </div>
  );
}
