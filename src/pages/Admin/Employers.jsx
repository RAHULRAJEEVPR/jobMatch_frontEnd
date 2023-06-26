import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";

import EmpTable from '../../components/admin/EmpTable';
import { adminEmpDetails } from '../../Services/adminApi'
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
  return (
    <div>
      <EmpTable empData={empData}/>
    </div>
  )
}
