import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function EmpUserEdu({ userData }) {
  return (
    <div className="bg-white border border-gray-500 shadow-xl mt-5 mb-5 rounded-xl">
      <div className="p-4">
        <div className="flex">
          <span className="text-2xl font-bold">Education </span>
        </div>
        {userData.education.length != 0 ? (
          userData.education.map((edu, i) => (
            <div key={i} className="mt-3">
              <span className="ms-2 me-4">
                <FontAwesomeIcon className="text-sm" color="" icon={faCircle} />
              </span>
              <span className="text-xl font-medium">Course : {edu.course}</span>

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
            </span>
            <span className="text-xl font-medium"> no educations added</span>
          </div>
        )}
      </div>
    </div>
  );
}
