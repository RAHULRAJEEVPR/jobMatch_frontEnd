import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../../Redux/user/userSlice";
import { toast } from 'react-toastify';
import { updateUserBasicInfo } from "../../../Services/userApi";

export default function BasicInfOModal({userData}) {
  
  
 


  const dispatch = useDispatch();
  const [info, setInfo] = useState({ Location: userData.location, Phone: userData.phone });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
     setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.Location.trim() == "") {
      return toast.warn("location is needed");
    }
    if (!/^(\+\d{1,3})?\d{10}$/.test(info.Phone)) {
        return toast.warn("Mobile number should be a valid 10-digit number");
      }
    updateUserBasicInfo({...info}).then((res)=>{
        console.log(res.data);
        dispatch(updateUserDetails(res.data.userData))
        toast.success("updated successfully")
     setShowModal(false)
    }).catch((err)=>{
        toast.error("something went wrong")
        console.log(err,"error");
        setShowModal(false)
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
                      Basic info
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
                          Location
                        </label>
                        <input
                          type="text"
                          value={info.Location}
                          id="Location"
                          name="Location"
                          className="mt-1 p-2   block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                          placeholder="Enter the Location"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="company"
                          className="block text-2xl font-semibold text-black"
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          id="Phone"
                          value={info.Phone}
                          name="Phone"
                          className="mt-1 p-2  block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                          placeholder="Enter the phone number"
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
                          Update
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
