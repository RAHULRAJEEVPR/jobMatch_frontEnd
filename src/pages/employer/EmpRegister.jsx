import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { empSignUp, empSignupWithGoogle } from "../../Services/EmpApi";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import logoo from "../../assets/logoo.png";

export default function EmpRegister() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cmpName: "",
  });
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (localStorage.getItem("empJwt")) {
      navigate("/employer/");
    }
  });

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
       
          empSignupWithGoogle(res.data)
            .then((res) => {
              dispatch(hideLoading());

             
              if (res.data.created) {
                toast.success("registered successfully, please login now");
                navigate("/employer/login");
              } else if (res.data.exists) {
                toast.warn("account already exists");
              }
            })
            .catch((error) => {
              dispatch(hideLoading());

              console.log(error.message);
              toast.error("something went wrong");
            });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.email.trim() === "") {
      return toast.warn("email should not be empty");
    } else if (values.password.trim() === "") {
      return toast.warn("password should not be empty");
    } else if (values.cmpName.trim() === "") {
      return toast.warn("name should not be empty");
    }

    try {
      dispatch(showLoading());
      empSignUp({ ...values })
        .then((res) => {
          dispatch(hideLoading());

          console.log(res);
          if (res.data.created) {
            toast.success(res.data.message);
            navigate("/user/login");
          } else if (res.data.exists) {
            toast.warn("account already exists");
          }
        })
        .catch((error) => {
          dispatch(hideLoading());

          console.log(error.message);
          toast.error(error.message);
        });
    } catch (error) {
      dispatch(hideLoading());

      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md  md:w-3/4 lg:w-2/6 shadow-xl">
          <div className="flex justify-center">
            <img className="w-40" src={logoo} alt="" />
          </div>
          <h1 className="text-4xl text-blue-950 font-bold mb-6 text-center">
            Welcome on Board
          </h1>
          <h3 className="font-bold text-xl mb-4">Login To Find Talents</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-gray-300 shadow-md px-3 py-2 rounded-md mb-2"
                placeholder="Enter your email"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Company Name
              </label>
              <input
                id="cmpName"
                name="cmpName"
                type="text"
                className="w-full border border-gray-300 shadow-md px-3 py-2 rounded-md mb-2"
                placeholder="Enter your Company Name"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md mb-2"
                placeholder="Enter your password"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="w-full mb-2">
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 text-xl mb-1"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full justify-center text-center mb-1 font-bold">
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
                <span>Already have an account?</span>
                <Link
                  to="/employer/login"
                  className="text-sm text-blue-500 hover:text-blue-700"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
