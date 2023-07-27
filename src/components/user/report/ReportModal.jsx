import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import { userReportJob } from "../../../Services/userApi"; 
import { toast } from "react-toastify";

export default function ReportModal({postId}) {
    const [showModal, setShowModal] = useState(false);
    const [reason, setReason] = useState("");

const handleSubmit=(e)=>{
    e.preventDefault()
if(reason.trim()==""){
    return toast.warn("reason should't be empty")
}
userReportJob({reason,postId}).then((res)=>{
    if(res.reported){

        toast.success(res.data.message)
    }else{
        toast.warn(res.data.message)
    }
}).catch((err)=>{
    console.log(err);
    toast.error("something went wrong try again later")
})
}
  return (
    <>
    <div className="flex justify-center mx-4">
      <div  className="">
      <button onClick={()=>setShowModal(true)} className="p-2 text-3xl hover:text-4xl text-red-700">
              <FontAwesomeIcon icon={faCircleExclamation} />
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
                  <h3 className="text-3xl mx-auto text-amber-400 font-black">
                    Report!!!
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                      <label
                        htmlFor="skill"
                        className="block text-xl font-bold text-gray-950"
                      >
                        Reason
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        rows="2"
                        className="mt-1 p-2 focus:ring-gray-500 focus:border-gray-500 block w-full font-semibold shadow-sm md:text-lg border-gray-300 rounded-md"
                        placeholder="Enter a skill"
                        value={reason}
                        onChange={(event) => setReason(event.target.value)}
                      ></textarea>
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
                        className="bg-yellow-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                        type="submit"
                      >
                        Report
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
