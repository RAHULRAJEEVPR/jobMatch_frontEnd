import React, { useState } from "react";
import { dropUserSkill } from "../../../Services/userApi";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../../Redux/user/userSlice";
import SkillModal from "../ProfileModals/SkillModal";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCircle } from "@fortawesome/free-solid-svg-icons";
export default function UserSkills({ userData }) {
  const dispatch = useDispatch();
  const dropSkill = (skill) => {
    dropUserSkill({ skill })
      .then((res) => {
        dispatch(updateUserDetails(res.data.userData));
        toast.success("skills removed");
      })
      .catch((err) => {
        toast.error("something went wrong");
        console.log(err);
      })
  };
  return (
    <div className="bg-white border border-gray-500 shadow-xl mt-5 rounded-xl">
      <div className="p-4">
        <div className="flex">
          <span className="text-2xl  font-bold">SKILLS </span> <SkillModal />
        </div>
        {userData.skills.length != 0 ? (
          <div className="mt-3">
            {userData.skills.map((skill, i) => (
              <span
                key={skill}
                className="text-white bg-gray-700 rounded-lg me-3 px-2 py-1"
              >
                <span>{skill}</span>
                <button
                  onClick={() => dropSkill(skill)}
                  className="text-red-500 ms-3 hover:text  text-lg  items-center"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        ) : (
          <div className="mt-3">
             <span className="ms-2 me-4">
                <FontAwesomeIcon className="text-sm" color="" icon={faCircle} />
              </span>
            <span className="text-xl font-medium"> no skills added</span>
          </div>
        )}
      </div>
    </div>
  );
}
