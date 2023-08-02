import React from "react";
import img from "../../../assets/profileAvathar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { empChangeUserImage } from "../../../Services/EmpApi";
import { updateEmpDetails } from "../../../Redux/employer/EmpSlice";

export default function EmpPropic({ empData }) {
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    if (!image) {
      // Image is empty
      toast.error("Please select an image");
      return;
    }
    const formData = new FormData();

    formData.append("image", image);
    empChangeUserImage(formData)
      .then((res) => {
        dispatch(updateEmpDetails(res.data.empData));
        toast.success("updated successfully");
      })
      .catch((er) => {
        console.log(er);
        toast.error("something went wrong");
      });
  };
  return (
    <div className="bg-white border  flex flex-col  mb-3 lg:mx-8 p-6 rounded-xl shadow-md border-gray-500">
      <div className="relative flex flex-col justify-center  mx-auto mb-4">
        <div className="">
          <img
            src={!empData.image ? img : empData.image}
            alt="Current Profile Image"
            className="rounded-full w-44 h-44"
          />
        </div>
        <input
          onChange={handleImageChange}
          type="file"
          id="new-image"
          className="hidden"
        />
        <label
          htmlFor="new-image"
          className="px-8 py-2 absolute  top-36 mt-4  bg-white font-bold cursor-pointer"
        >
          Update Image
        </label>
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
  );
}
