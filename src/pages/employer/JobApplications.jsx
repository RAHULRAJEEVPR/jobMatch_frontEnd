import React, { useEffect, useState } from "react";
import Categorys from "../../components/employer/JobApplication/Categorys";
import ApplicantCard from "../../components/employer/JobApplication/ApplicantCard";
import { useLocation } from "react-router-dom";
import { getSinglePostData } from "../../Services/EmpApi";

export default function JobApplications() {
  const [postData, setPostData] = useState([]);
  const [status, setStatus] = useState("Pending");
  const location = useLocation();
  const { postId } = location.state || {};

  useEffect(() => {
    getSinglePostData(postId)
      .then((res) => {
        setPostData(res.data.postData);
        console.log(res.data.postData);
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  }, [status]);
  
  if (postData.length === 0) return null;
  return (
    <>
      <div className="">
        <div className="mt-10  flex">
          <button className="bg-blue-950 ms-auto md:me-24 me-5 text-white md:text-2xl font-bold px-3 py-2">
            Find Talent
          </button>
        </div>
        <Categorys set={setStatus} status={status} />
        {postData.applicants.length !== 0 ? (
          <div>
            <ApplicantCard postData={postData} status={status}  set={setPostData} />
           
          </div>
        ) : (
          <div className="flex justify-center mt-20">
            <h1 className="text-3xl font-bold">
              You Don't Have Any  Applications
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
