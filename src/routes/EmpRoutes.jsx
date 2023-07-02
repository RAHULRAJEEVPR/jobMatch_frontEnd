import React from "react";
import { Route, Routes } from "react-router-dom";
import EmpRegister from "../pages/employer/empRegister";
import EmpEmailVerify from "../components/EmailVerify/EmpEmailVerify";
import EmpLogin from "../pages/employer/empLogin";
import EmpLayout from "../pages/employer/EmpLayout";
import NotFoundPage from "../pages/NotFoundPage";
import EmpHome from "../pages/employer/EmpHome";

export default function EmpRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/register" element={<EmpRegister />} />
      <Route path="/login" element={<EmpLogin />} />
      <Route path="/:id/verify/:token" element={<EmpEmailVerify />} />
      <Route path="/" element={<EmpLayout />}>
        <Route index element={<EmpHome />} />
      </Route>
    </Routes>
  );
}
