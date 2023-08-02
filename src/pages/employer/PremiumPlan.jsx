import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { subscription } from "../../Services/EmpApi";

export default function PremiumPlan() {
  const handleProceed = () => {
    subscription()
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <h1 className="font-bold font-serif text-2xl sm:text-4xl">
          Become a Premium Member
        </h1>
      </div>
      {/* card */}
      <div className="flex justify-center rounded-2xl ">
        {" "}
        {/* Add "flex justify-center" here */}
        <div className="md:w-5/12 mt-10 bg-white rounded-xl  ">
          <div className=" p-2 rounded-t-lg bg-blue-800">
            <h1 className="text-3xl text-center font-bold text-white">
              Premium Pack
            </h1>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl font-extrabold text-center ">1000 ₹</h1>
          </div>
          <div onClick={handleProceed} className=" mt-10 flex">
            <button className="text-white mx-auto bg-blue-950 font-bold rounded-md  px-6 py-2 text-2xl">
              PROCCED
            </button>
          </div>
          <div className="mt-10 mx-5 px-2 py-1 bg-gray-200">
            <div className="font-mono mb-2 ">
              <span className="me-2 text-xl">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-xl">Unlimited JobPosts </span>
            </div>
            <div className="font-mono mb-2 ">
              <span className="me-2 text-xl">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-xl">Job post manegement</span>
            </div>
            <div className="font-mono mb-2 ">
              <span className="me-2 text-xl">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-xl">chat with Job Seekers </span>
            </div>
            <div className="font-mono mb-2 ">
              <span className="me-2 text-xl">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="text-xl">Invite candidate into job post</span>
            </div>
          </div>
          <div className="mt-5"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
