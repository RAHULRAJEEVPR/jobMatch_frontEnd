import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminHome from "../pages/Admin/AdminHome";
import Layout from "../components/admin/shared/Layout";
import DashBoard from "../components/admin/DashBoard";
import User from "../pages/Admin/User";
import Employers from "../pages/Admin/Employers";
import Skills from "../pages/Admin/Skills";
import City from "../pages/Admin/city";
import PrivateRoutes from "../protectedRoutes/PrivateRoutes";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/home" element={<AdminHome />} />
      <Route element={<PrivateRoutes role={"admin"} route={"/admin/login"} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="/users" element={<User />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/city" element={<City />} />
        </Route>
      </Route>
    </Routes>
  );
}
