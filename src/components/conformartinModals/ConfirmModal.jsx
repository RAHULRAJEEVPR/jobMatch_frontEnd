import React, { useState } from 'react'

export default function ConfirmModal({fun,id,action}) {
    const [showModal,setShowModal]=useState(false)
  return (
    <div>
       <>
    <div className="flex justify-end ">
    <div
    onClick={()=>setShowModal(true)}>

    </div>
      {showModal ? (
        <>
          <div className="justify-center pt-20   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center  bg-blue-950 p-3 border-b border-solid border-slate-200 rounded-t">
                <div className='mx-auto '>
                 <h3 className="text-3xl text-white  text-center font-bold">Notice!!!</h3>

                </div>

                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 <div className='py-5'>
                  <h1 className='md:text-2xl text-center font-serif font-semibold'>Your Free Trail JobPosts are Over Subscribe to our premium pack</h1>
                 </div>
                 <div className='py-5'>
                  <h1 className='ms:text-lg text-center font- font-semibold'>Click Continue to View more about our premium plan</h1>
                 </div>
                  <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-while bg-red-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                        onClick={()=>navigate("/employer/subscription")}
                          className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                          type="submit"
                        >
                         continue
                        </button>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  </>
    </div>
  )
}
