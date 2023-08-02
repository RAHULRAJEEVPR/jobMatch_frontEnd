import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function EmpUserExp({ userData }) {
  return (
    <div className="bg-white border border-gray-500 shadow-md mt-6 rounded-xl ">
      <div className="px-4 py-2">
        <div className="text-2xl lg:text-3xl flex font-semibold">
          {" "}
          <FontAwesomeIcon
            className="me-2 mt-1"
            color=""
            icon={faBriefcase}
          />{" "}
          Work Experiance{" "}
        </div>
        {userData.workExp.length != 0 ? (
          userData.workExp.map((data, i) => (
            <div className="mt-3" key={i}>
              <span className=" me-4">
                <FontAwesomeIcon className="text-sm" color="" icon={faCircle} />
              </span>
              <span className="text-xl font-medium">
                Role:
                {data.role}
              </span>
              <br />
              <span className="text-xl font-medium ms-7">
                Company: {data.company}
              </span>
              <br />
              <span className="text-xl font-medium ms-7">
                Exp: {data.exp} Years
              </span>
            </div>
          ))
        ) : (
          <div className="mt-3">
            <span className="ms-2 me-4">
              <FontAwesomeIcon className="text-sm" color="" icon={faCircle} />
            </span>
            <span className="text-xl font-medium">No Experience added</span>
          </div>
        )}
      </div>
    </div>
  );
}
