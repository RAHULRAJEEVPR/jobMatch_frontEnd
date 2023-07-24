import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Layout from "../pages/user/UserLayout";
import EmailVerify from "../components/EmailVerify/emailVerify";
import PrivateRoutes from "../protectedRoutes/PrivateRoutes";
import Formik from "../pages/user/Formik";
import NotFoundPage from "../pages/NotFoundPage";
import UserHome from "../pages/user/UserHome";
import UserProfile from "../pages/user/UserProfile";
import PostDetailedView from "../pages/user/PostDetailedView";
import UserEmpProfileview from "../pages/user/UserEmpProfileview";
import JobRequests from "../pages/user/JobRequests";
import Invites from "../pages/user/Invites";
import UserChat from "../pages/user/UserChat";


export default function UserRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/formik" element={<Formik />} />
      <Route element={<PrivateRoutes role={"user"} route={"/user/login"} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserHome />} />
          <Route path="/jobdetailedview" element={<PostDetailedView/>} /> 
          <Route path="/profile" element={<UserProfile />} /> 
          <Route path="/employer/profile" element={<UserEmpProfileview />} /> 
          <Route path="/jobrequests" element={<JobRequests />} /> 
          <Route path="/invites" element={<Invites/>}/>
          <Route path="/userChat" element={<UserChat/>}/>

          
          
        </Route>
      </Route>
    </Routes>
  );
}