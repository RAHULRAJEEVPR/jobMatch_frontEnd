import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/job-match-high-resolution-color-logo 1.png";
import homeImg from "../assets/home logo.jpg";
import employerLogo from "../assets/employer home.png";
import jobSeekerLogo from "../assets/jobSeeker.png";
import { FaUserCircle } from "react-icons/fa";
import { HiSearchCircle } from "react-icons/Hi";
import { MdOutlineWork } from "react-icons/Md";
export default function LandingPage() {
  return (
    <>
      <nav className="bg-blue-950 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            {/* <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              JobMatch
            </span>
          </Link>
        </div>
      </nav>
      <section className="bg-red-50  ">
        <div className="grid md:grid-cols-2 gap-3  bg-red-50  w-full  ">
          <div className="m-6">
            <h1 className="text-center font-black text-4xl">
              Hey, Welcome to Job Match
            </h1>
            <h3 className=" lg:ps-32  md:w-5/6 lg:4/6 pt-5 font-bold text-2xl">
              "Connecting Talent with Opportunity: Where Recruiters and Job
              Seekers Unite to Shape Bright Futures!"
            </h3>
          </div>
          <div className="  flex justify-center items-center">
            <img
              className="md:w-5/6 lg:w-4/6 lg:m-5 rounded"
              src={homeImg}
              alt="img"
            />
          </div>
        </div>
        <div className="caption text-center bg-gray-400 mb-3 mt-3">
          <h1 className="font-bold text-4xl text-white  pt-3 pb-3 ">How To Get A Job</h1>
        </div>
        <div className=" grid md:grid-cols-3 gap-3 flex-row m-5 p-5 ">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-green-500 shadow-xl  w-2/4  p-5 rounded-3xl  border-gray-500  bg-white ">
              <h1 className="text-4xl">
                <FaUserCircle />
              </h1>
              <h1 className="text-blue-950 font-bold text-center text-3xl">
                Create Your Profile
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-yellow-500 shadow-xl  w-2/4  p-5 rounded-3xl  border-gray-500  bg-white text-3xl">
              <h1 className="text-4xl">
                <HiSearchCircle />
              </h1>
              <h1 className="text-blue-950 text-center font-bold ">Apply For Jobs</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center shadow-xl  w-2/4  p-5 rounded-3xl  border-gray-500  bg-white text-3xl">
              <h1 className="text-blue-600 text-5x">
                <MdOutlineWork />
              </h1>
              <h1 className="text-blue-950 text-center font-bold">Get Hired</h1>
            </div>
          </div>
        </div>
        <div className="text-center  bg-gray-400">
          <h1 className="font-bold text-4xl text-white pt-3 pb-3">Select Your Role</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-2 m-5 ">
          <div className=" flex  justify-center ">
            <div className="bg-white p-4   mb:w-2/4 flex flex-col items-center text-center border  shadow-xl">
              <h2 className="text-red-700 font-bold m-3">Tech Professionals</h2>
              <img className="" src={employerLogo} alt="" />
              <h1 className="text-center m-3 text-lg font-semibold w-3/4 text-gray-900">
                I'm Interested In A Tech Job
              </h1>
              <Link className="bg-blue-950 w-4/6 mb-3 rounded-2xl" to="/user/login">
              <div c>
            <h1 className="text-white font-bold text-md p-1  ">Exploer Jobs</h1>
          </div>
          </Link>
            </div>
          </div>
          <div className=" flex  justify-center ">
            <div className="bg-white mb:w-2/4 flex flex-col items-center text-center border  shadow-xl">
              <h2 className="text-red-700 font-bold m-3">Employers & Company</h2>
              <img src={jobSeekerLogo} alt="" />
              <h1 className="text-center m-3 text-lg font-semibold w-3/4 text-gray-900">
                I'm looking To Hire Tech Talent
              </h1>
              <Link className="bg-blue-950 w-4/6 mb-3 rounded-2xl" to="/employer/login">

              <div className="bg-blue-950 w-4/6 mb-3 rounded-2xl">
            <h1 className="text-white font-bold text-md p-1  ">Find Talents</h1>
          </div>
          </Link>

            </div>
          </div>
        </div>
        <footer className="bg-blue-950 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
        </div>
      </footer>
      </section>
    </>
  );
}
