import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { userGetSkillsData } from "../../../Services/userApi";
import { addUserSkill } from "../../../Services/userApi";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../../../Redux/user/userSlice";
import { toast } from "react-toastify";

export default function SkillModal() {
const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
 const [skills, setSkills] = useState([]);

  useEffect(() => {
    userGetSkillsData()
      .then((res) => {
        // console.log(res.data.skillData);
        setSkills(res.data.skillData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const toggleSkillSelection = (value) => {
      if (selectedSkills.includes(value)) {
          setSelectedSkills(selectedSkills.filter((skill) => skill !== value));
        } else {
            setSelectedSkills([...selectedSkills, value]);
        }
    };
    
    const isSkillSelected = (value) => selectedSkills.includes(value);
    
    const handleSubmit =(e)=>{
       e.preventDefault();
       addUserSkill(selectedSkills).then((res)=>{
        dispatch(updateUserDetails(res.data.userData))
        toast.success("Added susccessfully")
        setShowModal(false)
        setSelectedSkills([])
       }).catch((err)=>{
        console.log(err);
        setShowModal(false)
        toast.error("something went wrong")
       })
    }

  if (skills.length == 0) return;
  return (
    <>
      <div className="flex ">
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
                         Select Your Skills
                        </label>
                        <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div
                      className="flex items-center"
                      key={skill.skill}
                    >
                      <input
                        type="checkbox"
                        checked={isSkillSelected(skill.skill)}
                        onChange={() => toggleSkillSelection(skill.skill)}
                        className="mr-2"
                      />
                      <span>{skill.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
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
