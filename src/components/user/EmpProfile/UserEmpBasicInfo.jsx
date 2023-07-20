import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function UserEmpBasicInfo({ empData }) {
  return (
    <div className="bg-white border border-gray-500 shadow-xl mt-5 rounded-xl">
      <div className="p-4">
        <div className="flex">
          <span className="text-2xl font-bold">Basic info </span>{" "}
        </div>
        <div className="mt-3">
          <span className="ms-2 me-4">
            <FontAwesomeIcon className="text-sm" color="gray" icon={faCircle} />
          </span>{" "}
          <span className=" text-lg font-medium">
            {" "}
            Location :{" "}
            {empData.location ? empData.location : "location  not added"}
          </span>
          <br />
          <span className="ms-2 me-4">
            <FontAwesomeIcon className="text-sm" color="gray" icon={faCircle} />
          </span>{" "}
          <span className=" text-lg font-medium"> email :{empData.email}</span>
          <br />
          <span className="ms-2 me-4">
            <FontAwesomeIcon
              className="text-sm "
              color="gray"
              icon={faCircle}
            />
          </span>{" "}
          <span className=" text-lg font-medium">
            {" "}
            phone : {empData.phone ? empData.phone : "phone number not added"}
          </span>
        </div>
      </div>
    </div>
  );
}
