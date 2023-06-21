import { empAxiosInstence } from "../utils/axious-utils";


const empSignUp=(value)=>{
    return empAxiosInstence.post("/register",value,{
        withCredentials:true
    })
}

const empSignupWithGoogle=(value)=>{
    return  empAxiosInstence.post("/googleRegister",value,{
        withCredentials:true
    })
}

const empLogin=(value)=>{
    return empAxiosInstence.post("/login",value,{
     withCredentials:true
 })}

 const empLoginWithGoogle=(value)=>{
    return empAxiosInstence.post("/googlelogin",value,{
        withCredentials:true
    })
}

export{empSignUp,
empSignupWithGoogle,
empLogin,
empLoginWithGoogle
}