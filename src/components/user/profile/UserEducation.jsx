import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import EduModal from "../ProfileModals/EduModal";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../../Redux/user/userSlice";
import { toast } from "react-toastify";
import { dropUserEdu } from "../../../Services/userApi";

export default function UserEducation({ userData }) {
  const dispatch = useDispatch();
  const dropEdu = (id) => {
    dropUserEdu({ id })
      .then((res) => {
        dispatch(updateUserDetails(res.data.userData));
        toast.success("removed");
        dispatch(updateUserDetails(res.data.userData));
      })
      .catch((err) => {
        toast.error("something went wrong");
        console.log(err);
      });
  };
  return (
    <div className="bg-white border border-gray-500 shadow-xl mt-5 rounded-xl">
      <div className="p-4">
        <div className="flex">
          <span className="text-2xl font-bold">Education </span> <EduModal />
        </div>
        {userData.education.length != 0 ? (
          userData.education.map((edu, i) => (
            <div key={i} className="mt-3">
              <span className="ms-2 me-4">
                <FontAwesomeIcon className="text-sm" color="" icon={faCircle} />
              </span>
              <span className="text-xl font-medium">Course : {edu.course}</span>
              <button
                onClick={() => dropEdu(edu._id)}
                className="bg-black ms-4 text-white px-2 pb-1 rounded-md"
              >
                x
              </button>
              <br />
              <span className="text-xl font-medium ms-9">
                Institute : {edu.institute}
              </span>
            </div>
          ))
        ) : (
          <div className="mt-3">
            <span className="ms-2 me-4">
                <FontAwesomeIcon className="text-sm" color="" icon={faCircle} />
              </span><span  className="text-xl font-medium"> no educations added</span>
          </div>
        )}
      </div>
    </div>
  );
}
