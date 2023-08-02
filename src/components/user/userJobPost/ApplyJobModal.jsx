import React, { useEffect, useState } from "react";
import { applyJob } from "../../../Services/userApi";
import { toast } from "react-toastify";
import { showLoading,hideLoading } from "../../../Redux/alertSlice";
import { useDispatch } from "react-redux";

export default function ApplyJobModal({id,set}) {
  const dispatch=useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

  const handleFormSubmit =async (event) => {
    event.preventDefault();

    try {
    const formData = new FormData();
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("postId",id)
    setShowModal(false)
    dispatch(showLoading())
    await applyJob(formData).then((res)=>{
      set(res.data.post)
      dispatch(hideLoading())
        toast.success(res.data.message)
    }).catch((error)=>{
      dispatch(hideLoading())
        toast.error(error.response.data.message);  

    })
     
    // Reset form fields and close the modal
    setCoverLetter("");
    setResume(null);
    setShowModal(false);
} catch (error) {
    console.log("Error: Failed to submit job application", error);
  }
  };

  return (
    <>
      <div className="flex justify-center mx-4">
        <div  className="">
          <button
            onClick={() => setShowModal(true)}
            className="font-bold bg-blue-950 text-white md:text-xl rounded-lg hover:bg-blue-800 flex  mx-auto md:p-3 p-1 md:px-3"
          >
            APPLY NOW
          </button>
        </div>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center p-3 border-b border-solid bg-blue-950 border-slate-200 rounded-t">
                    <h3 className="text-3xl mx-auto text-white font-black">
                      APPLY NOW
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                      <div className="mb-4">
                        <label
                          htmlFor="skill"
                          className="block text-xl font-bold text-gray-950"
                        >
                          Cover letter
                        </label>
                        <textarea
                          id="cover"
                          name="cover"
                          rows="2"
                          className="mt-1 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full font-semibold shadow-sm md:text-lg border-gray-300 rounded-md"
                          placeholder="Enter a skill"
                          value={coverLetter}
                          onChange={(event) => setCoverLetter(event.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="resume"
                          className="block text-xl font-bold text-gray-950"
                        >
                          Resume
                        </label>
                        <input
                          className="border border-gray-300 w-full"
                          name="resume"
                          type="file"
                          onChange={(event) => setResume(event.target.files[0])}
                        />
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-while bg-red-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          CANCEL
                        </button>
                        <button
                          className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                          type="submit"
                        >
                          APPLY
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
