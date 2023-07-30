import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { empLogin,empLoginWithGoogle } from "../../Services/EmpApi";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { updateEmpDetails } from "../../Redux/employer/EmpSlice";
import logoo from "../../assets/logoo.png"; 


export default function EmpLogin() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

//.. goolge login
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(()=>{
    if (localStorage.getItem("empJwt")) {
      navigate("/employer/");
    }
  })

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          const userProfile = res.data;
          console.log(userProfile);
          empLoginWithGoogle(userProfile)
            .then((res) => {
              dispatch(hideLoading());
              console.log(res);
              if (res.data.login) {
                if(res.data.empData.status==false){
                  toast.error("your account has been blocked by user")
                }else{

                  dispatch(updateEmpDetails(res.data.empData))
                  localStorage.setItem("empJwt", res.data.token);
                  navigate("/employer/");
                  toast.success(res.data.message);
                }
              } else if (res.data.exists) {
                toast.warn("account already exists");
              }
            })
            .catch((error) => {
              dispatch(hideLoading());
              console.log(error);
              toast.error(error.response.data.message);
            });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
//. email login
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);

    if (values.email.trim() === "") {
      return toast.warn("email should not be empty");
    } else if (values.password.trim() === "") {
      return toast.warn("password should not be empty");
    } 
    try {
      dispatch(showLoading());
      empLogin({ ...values })
        .then((res) => {
          dispatch(hideLoading());
          if (res.data.login) {
            console.log(res.data.empData);
             if(res.data.empData.status===false){
            toast.error("your account has been blocked by user")
          }else{
            dispatch(updateEmpDetails(res.data.empData))
            localStorage.setItem("empJwt", res.data.token);
            navigate("/employer/");
            toast.success(res.data.message);
          }
          }
        })
        .catch((error) => {
          dispatch(hideLoading());
          console.log(error);
          toast.error(error.response.data.message);
        });
    } catch (error) {
      dispatch(hideLoading());
      // Handle any error that occurred during the request
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white w-screen ">
      <div className="flex justify-center items-center h-screen  ">
        <div className="bg-white p-8  rounded-md  md:w-3/4 lg:w-2/6 shadow-xl  ">
        <div className="flex justify-center">
          <img className="w-40" src={logoo} alt="" />
        </div>
          <h1 className="text-4xl text-blue-950 font-bold mb-10 text-center">
            Welcome on Board
          </h1>
          <h3 className="font-bold text-xl  mb-4">
            Login To Find Your Dream Job
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-gray-300 shadow-md px-3 py-2 rounded-md mb-3 "
                placeholder="Enter your email"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2 ">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md mb-3 "
                placeholder="Enter your password"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="w-full mb-3">
              <div className="w-full">
                <button
                  type="submit"
                  className=" w-full bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4  text-xl mb-1"
                >
                  LOGIN
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full justify-center text-center  mb-1 font-bold ">
                OR
              </div>
              <div className="w-full">
                <button
                  type="button"
                  onClick={() => {
                    login();
                  }}
                  className="w-full border-2 bg-white hover:bg-gray-200 text-black border-gray-300 shadow-md font-bold py-2 px-4 flex items-center justify-center backdrop-filter backdrop-blur-md backdrop-opacity-70"
                >
                  <div className="text-3xl">
                    <FcGoogle />
                  </div>
                  <span className="ml-2 text-xl">Google</span>
                </button>
              </div>
              <div className="text-end">
                <span>not a member? </span>
                <Link
                  to="/employer/register"
                  className="text-sm text-blue-700 hover:text-blue-700"
                >
                  signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
