import { empAxiosInstance } from "../utils/axious-utils";


const empSignUp=(value)=>{
    return empAxiosInstance.post("/register",value,{
        withCredentials:true
    })
}

const empSignupWithGoogle=(value)=>{
    return  empAxiosInstance.post("/googleRegister",value,{
        withCredentials:true
    })
}

const empLogin=(value)=>{
    return empAxiosInstance.post("/login",value,{
     withCredentials:true
 })}

 const empLoginWithGoogle=(value)=>{
    return empAxiosInstance.post("/googlelogin",value,{
        withCredentials:true
    })
}
const isEmpAuth=()=>{
    return empAxiosInstance.get("/empAuth",value,{withCredentials:true})
}
const skillData=()=>{
    return empAxiosInstance.get("/skillData",{withCredentials:true})
}
const cityData=()=>{
    return empAxiosInstance.get("/cityData",{withCredentials:true})
}
const createPost=(value)=>{
    return empAxiosInstance.post("/createPost",value,{withCredentials:true})
}
const deletePost=(value)=>{
    return empAxiosInstance.post("/deletePost",value,{withCredentials:true})
}
const completePost=(value)=>{
    return empAxiosInstance.post("/completePost",value,{withCredentials:true})
}
const editPost=(value,id)=>{
    console.log(id,"api");
    return empAxiosInstance.post(`/editPost/${id}`,value,{withCredentials:true})
}
const getActivePostData=()=>{
    return empAxiosInstance.get("/getactivepostdata",{withCredentials:true})
}
const getPostData=()=>{
    return empAxiosInstance.get("/getpostdata",{withCredentials:true})
}
const getSinglePostData=(postId)=>{
    return empAxiosInstance.get(`/getsinglepostdata/${postId}`,{withCredentials:true})
}
const getUserData=(userId)=>{
    return empAxiosInstance.get(`/getuserdata/${userId}`,{withCredentials:true})
}
const changeApplicationStatus=(postId,applicatonId,newStatus,userId)=>{
    return empAxiosInstance.get(`/changeapplicationstatus/${postId}/${applicatonId}/${newStatus}/${userId}`,{withCredentials:true})
}
const empChangeUserImage=(value)=>{
    return empAxiosInstance.post(`/changeImage`,value,{withCredentials:true})
}
const empUpdateAbout=(value)=>{
    return empAxiosInstance.post("/updateabout",value,{withCredentials:true})
}
const empUpdateBasic=(value)=>{
    return empAxiosInstance.post("/updatebasicinfo",value,{withCredentials:true})
}
const empSearchUser=(value)=>{
    return empAxiosInstance.post("/empsearchuser",value,{withCredentials:true})
}
const empInviteUser=(value)=>{
    return empAxiosInstance.post("/empinviteuser",value,{withCredentials:true})
}
const empChats=(userId)=>{
    return empAxiosInstance.get(`getChat/${userId}`,{withCredentials:true})
}
const empGetMessages=(chatid)=>{
    return empAxiosInstance.get(`getMessages/${chatid}`,{withCredentials:true})
}
const empSendMessage=(value)=>{
    return empAxiosInstance.post("/addMessage",value,{withCredentials:true})
}
const empCreateChat=(value)=>{
    return empAxiosInstance.post("/createChat",value,{withCredentials:true})
}

export{
empSignUp,
empSignupWithGoogle,
empLogin,
empLoginWithGoogle,
isEmpAuth,
skillData,
cityData,
createPost,
getPostData,
editPost,
deletePost,
getSinglePostData,
getUserData,
changeApplicationStatus,
completePost,
empChangeUserImage,
empUpdateAbout,
empUpdateBasic,
getActivePostData,
empSearchUser,
empInviteUser,
empChats,
empGetMessages,
empSendMessage,
empCreateChat
}
