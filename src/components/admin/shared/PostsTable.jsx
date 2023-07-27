import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PostsTable({ posts }) {
    const navigate=useNavigate()
    const navigateTo=(id)=>{
          navigate("/admin/adminSinglePostView",{state:{id:id}})
    }
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden m-2 border shadow-md">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-400 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
                <tr className="md:text-lg  ">
                  <th scope="col" className="py-3">
                    NO
                  </th>
                  <th scope="col" className="py-3">
                    Role
                  </th>
                  <th scope="col" className="py-3">
                    emp/company
                  </th>
                  <th scope="col" className="py-3">
                   View
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr key={index} className="border-b bg-white dark:border-neutral-500">
                    <td className="whitespace-nowrap md:px-6 md:py-4 px-2 py-2 font-bold md:text-lg">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap font-bold md:text-lg md:px-6 px-2 md:py-4">
                      {post.role}
                    </td>
                    <td className="whitespace-nowrap font-bold md:text-lg md:px-6 px-2 md:py-4">
                      {post.empId.cmpName}
                    </td>
                    <td className="whitespace-nowrap font-bold md:text-lg md:px-6 px-2 md:py-4">
                      <button onClick={()=>navigateTo(post._id)} className="text-blue-950 hover:text-blue-600">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
