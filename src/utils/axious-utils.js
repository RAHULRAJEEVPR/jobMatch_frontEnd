import axios from "axios"
import { userBaseUrl,empBaseUrl,adminBaseUrl} from "../constants/constants";


const createAxiosClient=(baseURL)=>{
    const client =axios.create({
        baseURL,
        timeout:6000,
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
const empAxiosInstance = createAxiosClient(empBaseUrl);
empAxiosInstance.interceptors.request.use(async (req) => {
  const modifiedReq = attachToken(req, "empJwt");
  return modifiedReq;
});
const adminAxiosInstence=createAxiosClient(adminBaseUrl)
adminAxiosInstence.interceptors.request.use(async(req)=>{
    const modifiedReq=attachToken(req,"adminJwt")
    return modifiedReq;
})

export {userAxiosInstence,empAxiosInstance,adminAxiosInstence}