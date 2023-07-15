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
const editPost=(value,id)=>{
    console.log(id,"api");
    return empAxiosInstance.post(`/editPost/${id}`,value,{withCredentials:true})
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
const changeApplicationStatus=(postId,userId,newStatus)=>{
    return empAxiosInstance.get(`/changeapplicationstatus/${postId}/${userId}/${newStatus}`,{withCredentials:true})
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
changeApplicationStatus
}