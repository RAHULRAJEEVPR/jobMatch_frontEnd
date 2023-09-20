import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import BasicInfOModal from '../ProfileModals/BasicInfOModal';
export default function BasicInfo({userData}) {
  return (
    <div className="bg-white border border-gray-500 shadow-xl mt-5 rounded-xl">
    <div className="p-4">
      <div className='flex'>
        <span className="text-2xl font-bold">Basic info </span>{" "}
        <BasicInfOModal userData={userData}/>
      </div>
      <div className="mt-3">
        <span className="ms-2 me-4">
          <FontAwesomeIcon
            className="text-sm"
            color="gray"
            icon={faCircle}
          />
        </span>{" "}
        <span className=" text-lg font-medium"> Location : {userData.location?userData.location:"location  not added"}</span>
        <br />
        <span className="ms-2 me-4">
          <FontAwesomeIcon
            className="text-sm"
            color="gray"
            icon={faCircle}
          />
        </span>{" "}
        <span className=" text-lg font-medium">
          {" "}
          email :{userData.email}
        </span>
        <br />
        <span className="ms-2 me-4">
          <FontAwesomeIcon
            className="text-sm "
            color="gray"
            icon={faCircle}
          />
        </span>{" "}
        <span className=" text-lg font-medium"> phone : {userData.phone?userData.phone:"phone number not added"}</span>
      </div>
    </div>
  </div>
  )
}
