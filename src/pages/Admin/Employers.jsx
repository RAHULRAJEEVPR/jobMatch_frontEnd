import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";


import EmpTable from '../../components/admin/EmpTable';
import { adminEmpDetails,changeEmpStaus } from '../../Services/adminApi'
import { showLoading,hideLoading } from '../../Redux/alertSlice'
export default function Employers() {
    const [empData,setEmpData]=useState([])
const dispatch = useDispatch();

useEffect(()=>{
dispatch(showLoading())  
  adminEmpDetails().then((res)=>{
    dispatch(hideLoading())  

    setEmpData(res.data.empData)
  })
},[])

const changeStatus=(id,status)=>{
  changeEmpStaus({id:id,status:status}).then((res)=>{
    setEmpData(res.data.empData)
    console.log(res.data.empData);
  }).catch((err)=>{
    console.log(err);
  })
}

  return (
    <div>
      <EmpTable change={changeStatus} empData={empData}/>
    </div>
  )
}
