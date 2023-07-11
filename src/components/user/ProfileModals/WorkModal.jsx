import React, { useState, useEffect } from "react";
import { addUserExp } from "../../../Services/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../../Redux/user/userSlice";
import { toast } from 'react-toastify';
export default function WorkModal({  }) {
  const dispatch = useDispatch();
  const [exp, setExp] = useState({ role: "", company: "", exp: 0 });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setExp((prevExp) => ({ ...prevExp, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(exp);
    if(exp.role.trim()==""){
    return  toast.warn("role should't be empty")
    }else if(exp.company.trim()==""){
      return   toast.warn("company should't be empty")
    }else if(isNaN(exp.exp)){
      return   toast.warn("expireance should be a number")
    }

    addUserExp({ ...exp })
      .then((res) => {
        dispatch(updateUserDetails(res.data.userData))
        toast.success("added successfully")
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      })
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
                      ADD CITY
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
                          Role
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          className="mt-1 p-2   block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                          placeholder="Enter the job role"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="company"
                          className="block text-2xl font-semibold text-black"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="mt-1 p-2  block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                          placeholder="Enter the company name"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="exp"
                          className="block text-2xl font-semibold text-black"
                        >
                          Expireance
                        </label>
                        <input
                          type="number"
                          id="exp"
                          name="exp"
                          className="mt-1 p-2   block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                          placeholder="Enter the number of years"
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
  );
}
