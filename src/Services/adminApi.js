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
const changeUserStaus=(value)=>{
  return adminAxiosInstence.post("/changeuserstatus",value,{withCredentials:true})
}
const changeEmpStaus=(value)=>{
  return adminAxiosInstence.post("/changeempstatus",value,{withCredentials:true})
}
const adminGetAllPosts=()=>{
  return adminAxiosInstence.get("/allpost",{withCredentials:true})
}
const adminGetSinglePosts=(id)=>{
  return adminAxiosInstence.get(`/singlepost/${id}`,{withCredentials:true})
}
const userCount=()=>{
  return adminAxiosInstence.get("/usercount",{withCredentials:true})
}
const revenue=()=>{
  return adminAxiosInstence.get("/revenue",{withCredentials:true})
}
const empCount=()=>{
  return adminAxiosInstence.get("/empcount",{withCredentials:true})
}
const adminGetReportdPosts=()=>{
  return adminAxiosInstence.get("/getreports",{withCredentials:true})
}
const changePostStatus=(value)=>{
  return adminAxiosInstence.post("/changepoststatus",value,{withCredentials:true})
}
const getSubscriptionDetails=(value)=>{
  return adminAxiosInstence.get("/subscriptiondetails",{withCredentials:true})
}
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
  adminDropCity,
  changeUserStaus ,
  changeEmpStaus ,
  adminGetAllPosts ,
  adminGetSinglePosts ,
  userCount,
  empCount,
  revenue,
  adminGetReportdPosts,
  changePostStatus,
  getSubscriptionDetails
};
