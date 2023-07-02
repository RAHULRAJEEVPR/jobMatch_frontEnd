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
        <Route index element={<UserHome/>} />



        </Route>
      </Route>
    </Routes>
  );
}
