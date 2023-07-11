import React, { useState, useEffect } from "react";
import { addUserExp } from "../../../Services/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../../Redux/user/userSlice";
import { addUserEdu } from "../../../Services/userApi";
import { toast } from "react-toastify";

export default function EduModal() {
    const dispatch = useDispatch();
  const [edu, setEdu] = useState({ course: "", Institute: ""});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdu((prevedu) => ({ ...prevedu, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edu.course.trim()==""){
        toast.warn("course should't be empty")
        return
    }
    if(edu.Institute.trim()==""){
        toast.warn("Institute should't be empty")
        return
    }
    addUserEdu({...edu}).then((res)=>{
        toast.success("added successfully")
        dispatch(updateUserDetails(res.data.userData))
    }).catch((err) => {
        toast.error("something went wrong")
        console.log(err);
      });
  };

  return (
    <>
    <div className="">
      <span
        onClick={() => {
          setShowModal(true);
        }}
        className="text-2xl  text-blue-700"
      >
        <FontAwesomeIcon className="ms-10" color="" icon={faPencil} />
      </span>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-2 border-b border-solid bg-blue-950 border-slate-200 rounded-t">
                  <h3 className="text-3xl mx-auto  text-white font-bold">
                    education
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="role"
                        className="block text-2xl font-semibold text-black"
                      >
                       course
                      </label>
                      <input
                        type="text"
                        id="course"
                        name="course"
                        className="mt-1 p-2   block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                        placeholder="Enter the course"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="company"
                        className="block text-2xl font-semibold text-black"
                      >
                        Institute
                      </label>
                      <input
                        type="text"
                        id="Institute"
                        name="Institute"
                        className="mt-1 p-2  block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                        placeholder="Enter the Institute name"
                        onChange={handleChange}
                      />
                    </div>
                  

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-while bg-red-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                        type="submit"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  </>
  )
}
