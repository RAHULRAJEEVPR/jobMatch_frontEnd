import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
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

          <form>
            <div className="mb-">
              <label
                for="email"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 shadow-md px-3 py-2 rounded-md mb-3 "
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-">
              <label
                for="name"
                className="block text-gray-700 text-md font-bold mb-2"
              >
                Name
              </label>
              <input
                id="namw"
                type="text"
                className="w-full border border-gray-300 shadow-md px-3 py-2 rounded-md mb-3 "
                placeholder="Enter your Nam"
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="block text-gray-700 text-md font-bold mb-2 "
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-md mb-3 "
                placeholder="Enter your password"
              />
            </div>
            <div className="w-full mb-3">
              <div className="w-full">
                <button
                  type="submit"
                  className=" w-full bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4  text-xl "
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <button
                  type="submit"
                  className=" w-full bg-white hover:bg-blue-800  text-black border-gray-300 shadow-md font-bold py-2 px-4  "
                >
                  <div className="text-3xl " >

                  <FcGoogle/>
                Google
                  </div>
                </button>
              </div> 
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
