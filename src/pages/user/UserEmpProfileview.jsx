import React from "react";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../Redux/alertSlice";
import { userGetEmpDetails } from "../../Services/userApi";
import { toast } from "react-toastify";
import UserEmpPropic from "../../components/user/EmpProfile/userEmpPropic";
import UserViewEmpAbout from "../../components/user/EmpProfile/UserViewEmpAbout";
import UserEmpBasicInfo from "../../components/user/EmpProfile/UserEmpBasicInfo";

export default function UserEmpProfileview() {
    const dispatch=useDispatch()
  const location = useLocation();
  const { id } = location.state || {};
  // console.log(id);
  const [empData, setEmpData] = useState();

  useEffect(() => {
    dispatch(showLoading());
    userGetEmpDetails(id)
      .then((res) => {
        dispatch(hideLoading());
        setEmpData(res.data.empData);
        // console.log(res.data.empData);  
      
      })
      .catch((err) => {
        toast.error(err.message)
        dispatch(hideLoading());
        console.log(err);
      });
  }, []);
  if(!empData)return
  return (
    <div className="grid lg:grid-cols-4 mt-6 lg:mx-9 mx-4 md:me-2 mb-5 ">
      <div className="col-span-4 lg:col-span-1 ">
       <UserEmpPropic empData={empData}/>
      </div>
      <div className="lg:col-span-3 col-span-4 lg:me-20">
        <UserViewEmpAbout empData={empData}/>
        <UserEmpBasicInfo empData={empData}/>
      </div>
    </div>
  );
}
