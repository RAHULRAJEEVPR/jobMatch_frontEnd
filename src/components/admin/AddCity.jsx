import React, { useEffect, useState } from "react";
import { adminAddCity } from "../../Services/adminApi";

export default function AddCity({addSkillFun,state,set}) {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = addSkillFun
  const city=state
  const setCity=set
  return (
    <>
      <div className="flex justify-end me-4">
        <button
          className="bg-blue-950 text-white focus:bg-red-600 font-bold uppercase  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add City
        </button>
        {showModal ? (
          <>
            <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center p-3 border-b border-solid bg-blue-950 border-slate-200 rounded-t">
                    <h3 className="text-3xl mx-auto  text-white font-black">ADD CITY</h3>
                    {/* <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        X
                      </span>
                    </button> */}
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="skill"
                          className="block text-3xl font-bold text-blue-950"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="mt-1 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full font-semibold shadow-sm md:text-xl border-gray-300 rounded-md"
                          placeholder="Enter a skill"
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
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
