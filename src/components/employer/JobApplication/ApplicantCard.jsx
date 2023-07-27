import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
import UserProfileButton from "../UserProfileButton";
import { useSelector } from "react-redux";
import {
  changeApplicationStatus,
  empCreateChat,
} from "../../../Services/EmpApi";
import { showLoading, hideLoading } from "../../../Redux/alertSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const openResume = (resumeUrl) => {
  window.open(resumeUrl, "_blank");
};

const downloadResume = (resumeUrl) => {
  fetch(resumeUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();
    })
    .catch((error) => {
      console.error("Error occurred while downloading the resume:", error);
    });
};

let textColor;

export default function ApplicantCard({ postData, status, set }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const empData = useSelector((state) => state.emp.empData);

  const filteredApplicants = postData.applicants.filter(
    (applicant) => applicant.status === status
  );
  if (status === "Pending") {
    textColor = "orange-600";
  } else if (status === "Selected") {
    textColor = "green-500";
  } else if (status === "Rejected") {
    textColor = "red-600";
  }

  const changeStatus = (id, userId, newStatus) => {
    dispatch(showLoading());
    changeApplicationStatus(postData._id, id, newStatus, userId)
      .then((res) => {
        dispatch(hideLoading());

        set(res.data.postData);

        toast.success(newStatus);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoading());
        toast.error("something went wrong");
      });
  };

  const newChat = (senderId, receiverId) => {
    empCreateChat({ senderId: senderId, receiverId: receiverId })
      .then((res) => {
        console.log(res.data);
        let data = res.data.chatData;
        console.log(data, "data avunindo");
        navigate("/employer/message", { state: { data } });
      })
      .catch((err) => {
        console.log(err);
        toast.error("something wend wrong");
      });
  };

  return (
    <>
      {filteredApplicants.length !== 0 ? (
        filteredApplicants.map((post, i) => (
          <div
            key={i}
            className="bg-white md:mx-24 border flex flex-wrap mb-3 m-1 md:p-4 p-3 shadow-xl border-gray-400 rounded-lg"
          >
            <div className="w-full  md:w-2/3  ">
              <div className="flex">
                <h1 className="md:text-2xl text-xl font-bold">
                  {post.applicant.name}
                </h1>
                <div className="flex ms-auto">
                  <div className="me-2 ">
                    <UserProfileButton id={post.applicant._id} />
                  </div>
                  <div>
                    <button
                      onClick={() => newChat(empData._id, post.applicant._id)}
                      className="bg-blue-950 text-white mb:text-xl rounded-lg font-semibold py-1 px-4"
                    >
                      CHAT
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <span className="md:text-xl  font-bold">Cover Letter:</span>
                <span className="md:text-xl font-serif">
                  {post.coverLetter}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold">
                  Application status:
                </span>
                <span className={`text-${textColor} text-lg font-bold`}>
                  {post.status}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold">Resume:</span>
                <button onClick={() => openResume(post.resumeUrl)}>
                  <FontAwesomeIcon
                    className="font-bold text-xl text-blue-600 px-3 rounded-lg ms-2"
                    icon={faEye}
                  />
                </button>
                <button onClick={() => downloadResume(post.resumeUrl)}>
                  <FontAwesomeIcon
                    className="font-bold text-xl text-blue-800 px-3 rounded-lg ms-2"
                    icon={faDownload}
                  />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 ">
              <div className="flex md:flex-col justify-end ">
                <div className="flex justify-end mt-4 md:mt-0">
                  <div className="me-2">
                    {status != "Selected" && (
                      <button
                        onClick={() =>
                          changeStatus(post._id, post.applicant._id, "Selected")
                        }
                        className="bg-green-700 text-white md:text-lg mb-2 rounded-lg font-bold py-1 px-4"
                      >
                        SELECT
                      </button>
                    )}
                  </div>
                  <div>
                    {status != "Rejected" && (
                      <button
                        onClick={() =>
                          changeStatus(post._id, post.applicant._id, "Rejected")
                        }
                        className="bg-red-800 text-white md:text-lg me-4 rounded-lg font-bold py-1 px-4"
                      >
                        REJECT
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-56">
          <div className="flex h-56 items-center justify-center">
            <h1 className="md:text-4xl  font-serif font-bold">
              No {status} Applicants Found
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
