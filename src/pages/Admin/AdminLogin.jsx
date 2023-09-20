import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../../Services/adminApi";
import { useSelector, useDispatch } from "react-redux";
import logoo from "../../assets/logoo.png";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("adminJwt")) {
      navigate("/admin/");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      let { email, password } = values;

      if (email.trim() == "") {
        return toast.warn("email should not be empty");
      } else if (password.trim() === "") {
        return toast.warn("password should not be empty");
      }
      dispatch(showLoading());

      adminLogin({ ...values })
        .then((res) => {
          console.log("then");

          dispatch(hideLoading());
          console.log(res);
          localStorage.setItem("adminJwt", res.data.token);
          if (res.data.login) {
            toast.success(res.data.message);
            navigate("/admin");
          }
        })
        .catch((error) => {
          console.log("catch");

          dispatch(hideLoading());
          console.log(error);
          toast.error(error.response.data.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="bg-white ">
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
          </form>
        </div>
      </div>
    </div>
  );
}
