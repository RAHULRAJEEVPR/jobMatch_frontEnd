import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { completePost } from "../../../../Services/EmpApi";

export default function CompleteModal({ setPosts, postId }) {
  const [showModal, setShowModal] = useState(false);

  const completePostt = (id) => {
    ({ id: id });
    completePost({ id: id })
      .then((res) => {
        setPosts(res.data.postData);
        toast.success("updated");
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
        setShowModal(false);

        toast.error("something went wrong");
      });
  };

  return (
    <>
      <div className="flex justify-end ">
        <button
          onClick={() => setShowModal(true)}
          className=" text-xl md:text-4xl  ms-4 text-lime-600 font-semibold rounded-md"
        >
          <FontAwesomeIcon
            className="me-2 mt-1"
            color=""
            icon={faCircleCheck}
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
                    <div className="mx-auto ">
                      <h3 className="text-3xl text-white  text-center font-bold">
                        Confirmation
                      </h3>
                    </div>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="py-5">
                      <h1 className="md:text-2xl text-center font-serif font-semibold">
                        Are sure You want to compelte this post now{" "}
                      </h1>
                    </div>
                    <div className="py-5">
                      <h1 className="ms:text-lg text-center font- font-semibold">
                        Click confirm to compete
                      </h1>
                    </div>
                    <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-while bg-red-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => completePostt(postId)}
                        className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                        type="submit"
                      >
                        confirm
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
  );
}
