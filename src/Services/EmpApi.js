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
const editPost=(value,id)=>{
    console.log(id,"api");
    return empAxiosInstance.post(`/editPost/${id}`,value,{withCredentials:true})
}
const getPostData=()=>{
    return empAxiosInstance.get("/getpostdata",{withCredentials:true})
}
export{empSignUp,
empSignupWithGoogle,
empLogin,
empLoginWithGoogle,
isEmpAuth,
skillData,
cityData,
createPost,
getPostData,
editPost
}