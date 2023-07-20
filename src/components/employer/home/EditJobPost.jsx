import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { editPost } from "../../../Services/EmpApi"; 

import { showLoading, hideLoading } from "../../../Redux/alertSlice";
import { useDispatch } from "react-redux";


export default function  EditJobPost({post, skills, citys ,setPosts}) {
const dispatch=useDispatch()
    const [postData,setPostData]=useState(post)
    const [isChecked, setIsChecked] = useState(post.skills);
  const [showModal, setShowModal] = useState(false);
 
  const [additionalSkills, setAdditionalSkills] = useState([...post.additionalSkills]);
  
  const [newSkill, setNewSkill] = useState("");
let id=postData._id
  useEffect(()=>{
    setIsChecked(post.skills)
    setPostData(post)
    setAdditionalSkills(post.additionalSkills)
    
  },[post])

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setIsChecked((prevSkills) => [...prevSkills, value]);
    } else {
      setIsChecked((prevSkills) => prevSkills.filter((skill) => skill !== value));
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setAdditionalSkills([...additionalSkills, newSkill.trim()]);

      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...additionalSkills];
    updatedSkills.splice(index, 1);
    setAdditionalSkills(updatedSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());
    for (const key in jobData) {
      if (typeof jobData[key] === "string") {
        jobData[key] = jobData[key].trim();
      }
    }

    // Form validation
    if (jobData.role === "") {

      toast.error("Please enter a job role");
      return;
    }

    if (jobData.location === "") {
      toast.error("Please select a location");
      return;
    }

    if (jobData.jobType === "") {
      toast.error("Please select a job type");
      return;
    }

    if (jobData.ctc === "") {
      toast.error("Please enter the CTC");
      return;
    }

    if (isNaN(jobData.ctc)) {
      toast.error("CTC must be a number");
      return;
    }

    if (jobData.exp === "") {
      toast.error("Please enter the minimum experience");
      return;
    }

    if (isNaN(jobData.exp)) {
      toast.error("Minimum experience must be a number");
      return;
    }
    if (isNaN(jobData.vacancy)) {
      toast.error("please enter the number of vancancy");
      return;
    }

    if (jobData.description === "") {
      toast.error("Please enter the job description");
      return;
    }

    const selectedSkills = Array.from(
      document.querySelectorAll('input[name="skills"]:checked')
    ).map((checkbox) => checkbox.value);
    jobData.skills = selectedSkills;
    jobData.additionalSkills=additionalSkills
    jobData.id=postData._id
    // jobData.additionalSkills = additionalSkills;
    if (jobData.skills.length === 0) {
      toast.error("Please select skill");
      return;
    }
    
    // Perform form submission logic
    editPost({...jobData,id: postData._id}).then((res)=>{ 
      console.log(res);
      dispatch(showLoading())
     
        setPosts(res.data.postData);
        console.log(res);
        dispatch(hideLoading())
        setAdditionalSkills([]);
        setNewSkill("");
        toast.success("updated")
    }).catch((err)=>{
      console.log(err);
      toast.error("something went wrong")
    })
    console.log("Job data:", jobData);
    e.target.reset(); 
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-end ">
      <button onClick={()=>{
        setShowModal(true)
      }} className="bg-orange-500 ms-3 text-white text-sm md:text-lg px-2 md:p-1 p-1 md:px-3 font-semibold rounded-md">
     EDIT
   </button>
        {showModal ? (
          <>
            <div className="justify-center pt-20   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between pt-36 p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl   font-bold">Edit Job Offer</h3>

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
                          htmlFor="role"
                          className="block text-xl font-bold text-gray-900"
                        >
                          Role
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          defaultValue={postData.role}
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter Job Role"
                          onChange={(e) => setPostData((prevData) => ({ ...prevData, role: e.target.value }))}

                        />
                      </div>

                      <div className="mb-2">
                        <label
                          htmlFor="location"
                          className="block text-xl font-bold text-gray-900"
                        >
                          Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                        >
                          <option  value={postData.location}>{postData.location}</option>
                          {citys.map((city, index) => (
                            <option key={index} value={city.city}>
                              {city.city}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-2">
                        <label
                          htmlFor="jobType"
                          className="block text-xl font-bold text-gray-900"
                        >
                          Job Type
                        </label>
                        <select
                          id="jobType"
                          name="jobType"
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                        >
                          <option value={postData.jobtype}>{postData.jobtype}</option>
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="ctc"
                          className="block text-xl font-bold text-gray-900"
                        >
                          CTC
                        </label>
                        <input
                        
                          type="number"
                          id="ctc"
                         defaultValue={postData.ctc}
                          name="ctc"
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter the ctc"
                          
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exp"
                          className="block text-xl font-bold text-gray-900"
                        >
                          Minimum Expireance
                        </label>
                        <input
                          type="number"
                          id="exp"
                          defaultValue={postData.minimumExp}
                          name="exp"
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter the minimum expireance"
                          
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="vacancy"
                          className="block text-xl font-bold text-gray-900"
                        >
                          Vacancy
                        </label>
                        <input
                        defaultValue={postData.vacancy}
                          type="number"
                          id="vacancy"
                          name="vacancy"
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter the minimum expireance"
                          
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="description"
                          className="block text-xl font-bold text-gray-900"
                        >
                          Job Description
                        </label>
                        <textarea
                          id="description"
                          defaultValue={postData. jobDescription}
                       
                          name="description"
                          className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter the job description"
                          rows="3" // Adjust the number of rows as needed
                          
                        ></textarea>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="skills"
                          className="block text-xl font-bold text-gray-900"
                        >
                          Required Skills
                        </label>
                        <div className="flex flex-wrap">
                          {skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex items-center mr-4 mb-2"
                            >
                              <input
                                type="checkbox"
                                name="skills"
                                value={skill.skill}
                                checked={isChecked.includes(skill.skill)}
                                onChange={handleCheckboxChange} // Invoke the handleCheckboxChange function


                                className="mr-1"
                              />
                              <label htmlFor={`skill${index + 1}`}>
                                {skill.skill}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-2">
                <label
                  htmlFor="additionalSkills"
                  className="block text-xl font-bold text-gray-900"
                >
                  Additional Skills
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="additionalSkills"
                    name="additionalSkills"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="mt-1 p-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm md:text-lg border-gray-300 rounded-md"
                    placeholder="Enter additional skills"
                  />
                  <button
                    type="button"
                    className="ml-2 bg-emerald-500 text-white font-bold px-3 py-2 rounded shadow hover:shadow-lg"
                    onClick={handleAddSkill}
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap">
                  {additionalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center mr-2 mb-2 bg-gray-100 p-1 rounded"
                    >
                      <span className="mr-1">{skill}</span>
                      <button
                        type="button"
                        className="text-red-500 font-bold"
                        onClick={() => handleRemoveSkill(index)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
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
