import React, { useEffect, useState } from "react";
import { revenue,userCount,empCount } from "../../Services/adminApi";
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js"
import {Doughnut} from "react-chartjs-2"

ChartJS.register(ArcElement,Tooltip,Legend)

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
  // const data={
  //   labels:["yes","no"],
  //   datasets:[{
  //     label:"poll",
  //     data:[3,6],
  //     backgroundColor:["black","red"],
  //     borderColor:["black","red"]
  //   }]
  // }
  const data = {
    labels: ["PREMIUM", "NORMAL"],
    datasets: [
      {
        
        data: [revenuee, empCounts-revenuee],
        backgroundColor: ["YELLOW", "GREEN"],
        borderColor: [ "YELLOW"],
      },
    ],
  };
  const options={}
  return (
    <div>
    <div className="flex sm:flex-row flex-col sm:space-x-8 mx-8 justify-center">
    {/* Total Users */}
    <div className="bg-blue-800 mt-2 sm:w-2/6 hover:bg-blue-900 flex flex-col items-center justify-center py-8 px-8 rounded-lg text-white">
      <h1 className="text-3xl font-semibold">Job Seeker</h1>
      <h1 className="text-5xl  py-4 font-bold">{userCounts}</h1>
    </div>

    {/* Revenue */}
    <div className="bg-blue-800 mt-2  sm:w-2/6 flex flex-col hover:bg-blue-900 items-center justify-center py-8 px-8 rounded-lg text-white">
      <h1 className="text-3xl font-semibold">Revenue</h1>
      <h1 className="text-5xl py-4 font-bold">₹{revenuee*1000}</h1>
    </div>

    {/* Employers */}
    <div className="bg-blue-800 mt-2  sm:w-2/6 flex flex-col hover:bg-blue-900 items-center justify-center py-8 px-8 rounded-lg text-white">
      <h1 className="text-3xl font-semibold">Employers</h1>
      <h1 className="text-5xl py-4 font-bold">{empCounts}</h1>
    </div>
  </div>
  <div className="flex flex-row">

<div className="flex flex-col  mt-5">
  <div className="ms-10">
    <h1 className="text-center font-bold text-2xl">EMPLOYER TYPE</h1>
  <div className=" mt-5">
  <Doughnut data={data} options={options} />
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}
