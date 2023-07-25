import React from "react";
import { Route, Routes } from "react-router-dom";
import EmpRegister from "../pages/employer/empRegister";
import EmpEmailVerify from "../components/EmailVerify/EmpEmailVerify";
import EmpLogin from "../pages/employer/empLogin";
import EmpLayout from "../pages/employer/EmpLayout";
import NotFoundPage from "../pages/NotFoundPage";
import EmpHome from "../pages/employer/EmpHome";
import JobApplications from "../pages/employer/JobApplications";
import UserProfileView from "../pages/employer/UserProfileView";
import AllPost from "../pages/employer/AllPost";
import EmpProfile from "../pages/employer/EmpProfile";
import FindTalents from "../pages/employer/FindTalents";
import EmpChat from "../pages/employer/EmpChat";
import PremiumPlan from "../pages/employer/PremiumPlan";
import PaymentSuccess from "../pages/employer/PaymentSuccess";

export default function EmpRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/register" element={<EmpRegister />} />
      <Route path="/login" element={<EmpLogin />} />
      <Route path="/:id/verify/:token" element={<EmpEmailVerify />} />
      <Route path="/" element={<EmpLayout />}>
        <Route index element={<EmpHome />} />
        <Route path="/applicants" element={<JobApplications/>}/>
        <Route path="/applicants/profile" element={<UserProfileView/>}/>
        <Route path="/allposts" element={<AllPost/>}/>
        <Route path="/profile" element={<EmpProfile/>}/>
        <Route path="/post/FindTalent" element={<FindTalents />} /> 
        <Route path="/message" element={<EmpChat/>}/>
        <Route path="/subscription" element={<PremiumPlan/>}/>
        <Route path="/paymentSuccess/:empId" element={<PaymentSuccess/>}/>
      </Route>
    </Routes>
  );
}
