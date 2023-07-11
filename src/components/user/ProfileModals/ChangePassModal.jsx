import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { changeUserPassword } from '../../../Services/userApi';

export default function ChangePassModal() {
    const [showModal, setShowModal] = useState(false);
    const [currPass,setCurrPass]=useState(null)
    const [newPass,setNewPass]=useState(null)
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currPass.trim()==""){
          return  toast.warn("current password should't be empty")
        }
        if(newPass.trim()==""){
         return   toast.warn("new password should't be empty")
        }
       changeUserPassword({currPass,newPass}).then((res)=>{
        toast.success(res.data.message)
        setShowModal(false)
       }).catch((error)=>{
        toast.error("something went wrong")
        setShowModal(false)

       })
    }
  return (
    <>
      <div className="">
      <div onClick={()=>setShowModal(true)} className="bg-white p-3 rounded-xl md:mx-10 flex mb-3 border border-gray-500 cursor-pointer hover:bg-gray-300 shadow-md ">
          <button className="text-xl  mx-auto font-bold ">Change  password</button>
        </div>
        {showModal ? (
          <>
            <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center p-2 border-b border-solid bg-blue-950 border-slate-200 rounded-t">
                    <h3 className="text-3xl mx-auto  text-white font-bold">
                      change Password
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
                          enter Current password
                        </label>
                        <input
                          type="password"
                          
                          id="currpass"
                          name="currpass"
                          className="mt-1 p-2   block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                          placeholder="Enter the Location"
                          onChange={(e)=>setCurrPass(e.target.value)}
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
                          type="password"
                          id="newpass"
                          
                          name="newpass"
                          className="mt-1 p-2  block w-full font-semibold shadow-sm md:text- border-gray-300 rounded-md"
                          placeholder="Enter the phone number"
                          onChange={(e)=>setNewPass(e.target.value)}
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
  )
}

