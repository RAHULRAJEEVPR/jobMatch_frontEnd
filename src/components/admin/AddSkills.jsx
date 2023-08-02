import React, { useEffect, useState } from "react";
import { adminAddSkill } from "../../Services/adminApi";
import { toast } from "react-toastify";

export default function AddSkills({ fetchData }) {
  const [showModal, setShowModal] = useState(false);
  const [skill, setSkill] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(skill);

    try {
      if (skill.trim() === "") {
        return toast.warn("skill should't be empty");
      }
      adminAddSkill({ skill })
        .then((res) => {
          toast.success(res.data.message);
          fetchData();
          console.log(res);
        })
        .catch((error) => {
          toast.warn(error.response.data.message);
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex  justify-end ">
        <button
          className="bg-blue-950 text-white focus:bg-red-600 font-bold uppercase me-5  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Skill
        </button>
        {showModal ? (
          <>
            <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl   font-bold">ADD Skill</h3>

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
                      <div className="mb-4">
                        <label
                          htmlFor="skill"
                          className="block text-2xl font-bold text-gray-900"
                        >
                          Skill
                        </label>
                        <input
                          type="text"
                          id="skill"
                          className="mt-1 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter a skill"
                          onChange={(e) => {
                            setSkill(e.target.value);
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
