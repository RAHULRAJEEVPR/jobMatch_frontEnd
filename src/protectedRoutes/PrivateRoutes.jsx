import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isUserAuth } from "../Services/userApi";
import { isAdminAuth } from "../Services/adminApi";
import { isEmpAuth } from "../Services/EmpApi";

export default function PrivateRoutes({ role, route }) {
  const [verify, setVerify] = useState(null);
  useEffect(() => {
    if (role === "user") {
      isUserAuth()
        .then((res) => {
          setVerify(res.data.success);
          console.log(res.data.success);
        })
        .catch((err) => {
          setVerify(false);
          localStorage.removeItem("userJwt");

          console.log(err);
        });
    } else if (role === "emp") {
      isEmpAuth()
        .then((res) => {
         
          setVerify(res.data.success);
        })
        .catch((err) => {
          setVerify(false);
          localStorage.removeItem("empJwt");

          console.log(err);
        });
    } else if (role === "admin") {
   
      isAdminAuth()
        .then((res) => {
          setVerify(res.data.success);
        })
        .catch((err) => {
          setVerify(false);
          localStorage.removeItem("adminJwt");

          console.log(err);
        });
    }
  }, []);

  if (verify == null) return;
  return verify ? <Outlet /> : <Navigate to={route} />;
}
