import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { updateUserAbout } from "../../../Services/userApi";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../../Redux/user/userSlice";

export default function AboutModal({ userAbout }) {
  const dispatch = useDispatch();
  const [about, setAbout] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setAbout(userAbout);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserAbout({ about })
      .then((res) => {      
        dispatch(updateUserDetails(res.data.userData));
        // console.log(res.data.userData, "hloooooooooo");
        setShowModal(false);
      })
      .catch((err) => {
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
                  <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl   font-bold">Edit About</h3>

                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        X
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <label
                          htmlFor="about"
                          className="block text-xl font-bold text-gray-900"
                        >
                          About
                        </label>
                        <textarea
                          id="about"
                          name="about"
                          value={about} // Update this line
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter the about"
                          rows="3"
                          onChange={(e) => {
                            setAbout(e.target.value);
                          }}
                        ></textarea>
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
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
                          update
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
