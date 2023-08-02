import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function EmpUserSkill({ userData }) {
  return (
    <div className="bg-white border border-gray-500 shadow-xl mt-5 rounded-xl">
      <div className="p-4">
        <div className="flex">
          <span className="text-2xl  font-bold">SKILLS </span>
        </div>
        {userData.skills.length != 0 ? (
          <div className="mt-3">
            {userData.skills.map((skill, i) => (
              <span
                key={skill}
                className="text-white bg-gray-700 rounded-lg me-3 px-2 py-1"
              >
                <span>{skill}</span>
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
