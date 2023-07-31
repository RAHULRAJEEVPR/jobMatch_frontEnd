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
import NotFoundPage from "../pages/NotFoundPage";
import AdminAllPosts from "../pages/Admin/AdminAllPosts";
import AdminSinglePostView from "../pages/Admin/AdminSinglePost";
import ReportedPosts from "../pages/Admin/ReportedPosts";
import Subscriptions from "../pages/Admin/Subscriptions";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/login" element={<AdminLogin />} />
      <Route path="/home" element={<AdminHome />} />
      <Route element={<PrivateRoutes role={"admin"} route={"/admin/login"} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="/users" element={<User />} />
          <Route path="/employers" element={<Employers/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/city" element={<City />} />
          <Route path="/posts" element={<AdminAllPosts />} />
          <Route path="/adminSinglePostView" element={<AdminSinglePostView />} />
          <Route path="/Reports" element={<ReportedPosts />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Route>
      </Route>
    </Routes>
  );
}
