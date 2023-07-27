import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash ,faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { deletePost } from '../../Services/EmpApi';
import { toast } from 'react-toastify';

export default function DeleteModal({setPosts,postId}) {
    const [showModal,setShowModal]=useState(false)

    const deletePostt = (id) => {
        deletePost({ id: id })
          .then((res) => {
            setPosts(res.data.postData);
            toast.success("deleted");
          })
          .catch((err) => {
            console.log(err);
            toast.error("something went wrong");
          });
      };
  return (
    <>
    <div className="flex justify-end ">
    <button
                    onClick={()=>setShowModal(true)}
                    className=" text-lg md:text-2xl  ms-4 text-red-700 font-semibold rounded-md"
                  >
                    <FontAwesomeIcon
                      className="me-2 mt-1"
                      color=""
                      icon={faTrash}
                    />
                  </button>
      {showModal ? (
        <>
          <div className="justify-center pt-20   items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-2/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center  bg-blue-950 p-3 border-b border-solid border-slate-200 rounded-t">
                <div className='mx-auto '>
                 <h3 className="text-3xl text-white  text-center font-bold">Confirmation</h3>

                </div>

                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 <div className='py-5'>
                  <h1 className='md:text-2xl text-center font-serif font-semibold'>Are sure You want to Delete this post now </h1>
                 </div>
                 <div className='py-5'>
                  <h1 className='ms:text-lg text-center font- font-semibold'>Click Delete to Proceed</h1>
                 </div>
                  <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-while bg-green-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                         onClick={(id) => deletePostt(postId)}
                          className="bg-red-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                          type="submit"
                        >
                         Delete
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
  )
}
