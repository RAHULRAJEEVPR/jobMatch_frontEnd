import { userAxiosInstence } from "../utils/axious-utils";

const userLogin = (value) => {
  return userAxiosInstence.post("/login", value, {
    withCredentials: true,
  });
};

const userSignup = (value) => {
  return userAxiosInstence.post("/register", value, {
    withCredentials: true,
  });
};
const userSignupWithGoogle = (value) => {
  return userAxiosInstence.post("/googleRegister", value, {
    withCredentials: true,
  });
};
const userLoginWithGoogle = (value) => {
  return userAxiosInstence.post("/googlelogin", value, {
    withCredentials: true,
  });
};

const isUserAuth = () => {
  return userAxiosInstence.get("/userAuth", { withCredentials: true });
};
const userGetAllPost = () => {
  return userAxiosInstence.get("getallpost", { withCredentials: true });
};
const userGetCityDetails = () => {
  return userAxiosInstence.get("/citydetails", { withCredentials: true });
};
const userGetSkillsData = () => {
  return userAxiosInstence.get("/skilldata", { withCredentials: true });
};
const jobDetailedView = (id) => {
  return userAxiosInstence.get(`/jobdetaileview/${id}`, {
    withCredentials: true,
  });
};

const applyJob = (data) => {
  return userAxiosInstence.post("/applyjob", data, { withCredentials: true });
};

const updateUserAbout = (data) => {
  return userAxiosInstence.post("/updateUserAbout", data, {
    withCredentials: true,
  });
};
const addUserExp = (data) => {
  return userAxiosInstence.post("/addUserExp", data, { withCredentials: true });
};
const addUserSkill = (data) => {
  return userAxiosInstence.post("/addUserSkill", data, {
    withCredentials: true,
  });
};
const dropUserSkill = (data) => {
  return userAxiosInstence.post("/dropUserSkill", data, {
    withCredentials: true,
  });
};
const addUserEdu = (data) => {
  return userAxiosInstence.post("/addUserEdu", data, { withCredentials: true });
};
const dropUserExp = (data) => {
  return userAxiosInstence.post("/dropUserExp", data, {
    withCredentials: true,
  });
};
const dropUserEdu = (data) => {
  return userAxiosInstence.post("/dropUserEdu", data, {
    withCredentials: true,
  });
};
const updateUserBasicInfo = (data) => {
  return userAxiosInstence.post("/updateUserBasicInfo", data, {
    withCredentials: true,
  });
};
const changeUserPassword = (data) => {
  return userAxiosInstence.post("/changeUserPassword", data, {
    withCredentials: true,
  });
};
const changeUserImage = (data) => {
  return userAxiosInstence.post("/changeUserImage", data, {
    withCredentials: true,
  });
};
const userGetEmpDetails = (empId) => {
  return userAxiosInstence.post(`/userGetEmpDetails/${empId}`, {
    withCredentials: true,
  });
};
const getUserApplications = (status) => {
  return userAxiosInstence.get(`/getUserApplications/${status}`, {
    withCredentials: true,
  });
};
const invitedJobs = () => {
  return userAxiosInstence.get("/invitedjobs", { withCredentials: true });
};

const userChats = (userId) => {
  return userAxiosInstence.get(`getChat/${userId}`, { withCredentials: true });
};
const userGetMessages = (chatid) => {
  return userAxiosInstence.get(`getMessages/${chatid}`, {
    withCredentials: true,
  });
};
const userSendMessage = (value) => {
  return userAxiosInstence.post("/addMessage", value, {
    withCredentials: true,
  });
};
const userReportJob = (value) => {
  return userAxiosInstence.post("/reportjob", value, { withCredentials: true });
};

export {
  userLogin,
  isUserAuth,
  userSignup,
  userSignupWithGoogle,
  userLoginWithGoogle,
  userGetAllPost,
  userGetCityDetails,
  userGetSkillsData,
  jobDetailedView,
  applyJob,
  updateUserAbout,
  addUserExp,
  addUserSkill,
  dropUserSkill,
  addUserEdu,
  dropUserExp,
  dropUserEdu,
  updateUserBasicInfo,
  changeUserPassword,
  changeUserImage,
  userGetEmpDetails,
  getUserApplications,
  invitedJobs,
  userChats,
  userGetMessages,
  userSendMessage,
  userReportJob,
};
