import React from 'react'
import img from "../../../assets/profileAvathar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function UserEmpPropic({empData}) {
  return (
    <div className="bg-white border  flex flex-col  mb-3 lg:mx-8 p-6 rounded-xl shadow-md border-gray-500">
    <div className="relative flex flex-col justify-center  mx-auto mb-4">
      <div className="">
        <img
          src={!empData.image ? img :empData.image}
          alt="Current Profile Image"
          className="rounded-full w-44 h-44"
        />
      </div>
    </div>
    <div className="my-2 flex over justify-center">
      <h1 className="text-2xl  font-extrabold"> {empData.cmpName}</h1>
    </div>
    <div className=" my-2">
      <h1 className="text-lg flex font-medium">
        {" "}
        <FontAwesomeIcon className="me-3" color="" icon={faEnvelope} />{" "}
        {empData.email}
      </h1>
    </div>
    <div className=" my-2">
      <h1 className="text-lg font-medium">
        {" "}
        <FontAwesomeIcon className="me-3" color="black" icon={faPhone} />{" "}
        {empData.phone ? empData.phone : "phone number not added"}
      </h1>
    </div>
    <div className=" my-2">
      <h1 className="text-lg font-medium">
        {" "}
        <FontAwesomeIcon
          className="me-4"
          color=""
          icon={faLocationDot}
        />{" "}
        {empData.location ? empData.location : "location  not added"}
      </h1>
    </div>
  </div>
  )
}
