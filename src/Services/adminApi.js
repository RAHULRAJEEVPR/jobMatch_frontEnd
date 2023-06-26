import { adminAxiosInstence } from "../utils/axious-utils";

const adminLogin = (value) => {
  return adminAxiosInstence.post("/login", value, {
    withCredentials: true,
  });
};
const adminUserDetails = () => {
  return adminAxiosInstence.get("/userDetails", { withCredentials: true });
};
const adminEmpDetails = () => {
  return adminAxiosInstence.get("/empDetails", { withCredentials: true });
};
const adminAddSkill = (value) => {
  return adminAxiosInstence.post("/addskill", value, { withCredentials: true });
};
const adminSkillDetails = () => {
  return adminAxiosInstence.get("/skillDetails", { withCredentials: true });
};
const adminDropSkill = (value) => {
  return adminAxiosInstence.post("/dropskill", value, {
    withCredentials: true,
  });
};

const adminAddCity = (value) => {
  return adminAxiosInstence.post("/addcity", value, { withCredentials: true });
};
const isAdminAuth=()=>{
    return adminAxiosInstence.get("/adminAuth",{withCredentials:true})
}
const adminCityDetails=()=>{
 return adminAxiosInstence.get("/cityDetails",{withCredentials:true})
}
const adminDropCity=(value) => {
  return adminAxiosInstence.post("/dropcity", value, {
    withCredentials: true,
  });
};
export {
  adminLogin,
  adminUserDetails,
  adminEmpDetails,
  adminAddSkill,
  adminSkillDetails,
  adminDropSkill,
  adminAddCity,
  isAdminAuth,
  adminCityDetails,
  adminDropCity
};
