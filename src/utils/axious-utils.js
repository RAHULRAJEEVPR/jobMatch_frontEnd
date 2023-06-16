import axios from "axios"
import { userBaseUrl } from "../constants/constants";

const createAxiosClient=(baseURL)=>{
    const client =axios.create({
        baseURL,
        timeout:4000,
        timeoutErrorMessage:"Request timeout Please Try Again!!!"
    })
    return client;
}

const attachToken=(req,tokenName)=>{
    let authToken=localStorage.getItem(tokenName)
    if(authToken){
        req.headers.Authorization=`Bearer ${authToken}`
    }
    return req
}

const userAxiosInstence=createAxiosClient(userBaseUrl)
userAxiosInstence.interceptors.request.use(async(req)=>{
    const modifiedReq=attachToken(req,"userJwt")
    return modifiedReq;
})

export {userAxiosInstence}