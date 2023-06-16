import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {showLoading,hideLoading} from "../../Redux/alertSlice"

import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.alerts);
  // console.log(loading);

  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);

    if (values.email.trim() == "") {
      return toast.warn("email should't be empty");
    } else if (values.password.trim() == "") {
      return toast.warn("password should't be empty");
    }
    console.log("kerunindo", values);
    try {
      dispatch(showLoading());

      await axios
        .post(
          "http://localhost:8000/user/login",
          {
            ...values,
          },
          { withCredentials: true }
        )
        .then((res) => {
          dispatch(hideLoading());
          console.log(res);
          localStorage.setItem("userJwt", res.data.token);
          if (res.data.login) {
            toast.success("login succesfull");
            navigate("/user/home");
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
    <div className="bg-white ">
      <div className="flex justify-center items-center h-screen  ">
        <div className="bg-white p-8  rounded-md w-2/6 shadow-xl  ">
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
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
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
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
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
                  type="submit"
                  className="w-full border-2 bg-white hover:bg-blue-950  hover:text-white text-black border-gray-300 shadow-md font-bold py-2 px-4 flex items-center justify-center backdrop-filter backdrop-blur-md backdrop-opacity-70"
                >
                  <div className="text-3xl">
                    <FcGoogle />
                  </div>
                  <span className="ml-2 text-xl">Google</span>
                </button>
              </div>
              <div className="text-end">
                <span> not a member</span>
                <Link
                  to="/user/register"
                  className="text-sm text-blue-500 hover:text-blue-700"
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
