import React, { useEffect, useState } from "react";
import Categorys  from "../../components/employer/JobApplication/Categorys";
import UserApplicationCard from "../../components/user/userApplication/UserApplicationCard";
import { getUserApplications } from "../../Services/userApi";
import { toast } from "react-toastify";
import { showLoading,hideLoading } from "../../Redux/alertSlice";
import { useDispatch } from "react-redux";
export default function JobRequests() {
    const dispatch=useDispatch()
    const [postData, setPostData] = useState([]);
    const [status, setStatus] = useState("Pending");
useEffect(()=>{
    dispatch(showLoading())
    getUserApplications(status).then((res)=>{
        dispatch(hideLoading())
        setPostData(res.data.postData)
    }).catch((err)=>{
        dispatch(hideLoading())

    })
},[status])
  return (
    <div>
    <div className="mt-12">
        <Categorys status={status} set={setStatus} />
    </div>
    {postData.length!=0 ?  <div>
<UserApplicationCard posts={postData} status={status}/>
    </div>:<div className="flex justify-center mt-36">
        <h1 className="text-4xl font-bold font-serif">You Have No {status} Applications </h1></div>}
   
    </div>
  )
}
