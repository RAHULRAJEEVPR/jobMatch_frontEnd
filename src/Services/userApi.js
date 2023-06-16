import { userAxiosInstence } from "../utils/axious-utils";

const userLogin=(value)=>{
   return userAxiosInstence.post("/login",value,{
    withCredentials:true
})}

const isUserAuth=()=>{
    return userAxiosInstence.get("/userinfo",
   { withCredentials:true});
}


export{
    userLogin,
    isUserAuth
}