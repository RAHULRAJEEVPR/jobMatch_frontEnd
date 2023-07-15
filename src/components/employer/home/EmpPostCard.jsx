import React, { useState } from "react";
import EditJobPost from "./EditJobPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faTrash
} from "@fortawesome/free-solid-svg-icons";
import { deletePost } from "../../../Services/EmpApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function EmpPostCard({ posts ,skills, citys ,setPosts }) {
  // const [postData,setPostData]=useState([])
  
  const navigate=useNavigate()
  
  const [currentPage, setCurrentpage] = useState(1);
  const postPerPage = 3;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(posts.length / postPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentpage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentpage(currentPage - 1);
    }
  };
  const changeCPage = (id) => {
    setCurrentpage(id);
  };

const deletePostt=(id)=>{
deletePost({id:id}).then((res)=>{
  setPosts(res.data.postData)
  toast.success("deleted")
}).catch((err)=>{
  console.log(err);
toast.error("something went wrong")
})
}

const navigateToApplicants = (postId) => {
  
  navigate(`/employer/applicants`,{state:{postId}});
};
  return (
    <>
    
      {posts.length!=0 ?
      records.map((post, index) => (
        
        <div
          key={index}
          className="bg-white md:mx-14 border grid md:grid-cols-2 m-3 md:p-4 p-3 shadow-xl border-gray-400 rounded-xl"
        >
          <div className="flex flex-col">
            <div className="my-1">
              <span className="md:text-3xl font-bold">Role : {post.role}</span>
            </div>
            <div className="my-1">
              <span className="md:text-2xl text-blue-600  font-bold">
                <span className="text-black">Company :</span>{" "}
                {post.empId.cmpName}
              </span>
            </div>
            <div className="my-1">
              <span className="md:text-2xl  font-bold">
                Location : {post.location}
              </span>
            </div>
            <div className="my-1">
              <span className="md:text-2xl  font-bold">
                Total vacancy : {post.vacancy}
              </span>
            </div>
            <div className="my-1">
              <span className="md:text-xl  font-bold">
                Required skills:
                {post.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-400 ms-1 rounded-md text-white font-medium text-base px-1"
                  >
                    {" "}
                    {skill}
                  </span>
                ))}
              </span>
            </div>
            <div className="my-1">
              <span className="md:text-xl font-bold">
                Status :<span className="text-green-500">{post.status}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex md:justify-end">
              <button
              onClick={() => navigateToApplicants(post._id)}
               className="bg-blue-900 text-white   md:px-5 font-bold rounded-md">
                VIEW
              </button>
              <EditJobPost post={post} skills={skills} citys={citys} setPosts={setPosts} />
              <button
              onClick={(id)=>deletePostt(post._id)}
               className=" text-lg md:text-2xl  ms-4 text-red-700 font-semibold rounded-md">
              <FontAwesomeIcon
                className="me-2 mt-1"
                color=""
                icon={faTrash}
              />
              </button>

            </div>
          </div>
        </div>
      )):<div></div>}
      <div className="flex justify-end  md:me-20 font-black">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px m-5">
            <li>
              <button
                onClick={prevPage}
                className={`px-3 ${
                  currentPage === 1 ? "hidden" : ""
                } py-2 ml-0 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                Prev
              </button>
            </li>
            {numbers.map((n, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    changeCPage(n);
                  }}
                  key={i}
                  className={`px-3 ${
                    currentPage === n ? "bg-yellow-300" : ""
                  } py-2 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 `}
                >
                  {n}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={nextPage}
                className={`px-3 ${
                  currentPage === nPage ? "hidden" : ""
                } py-2 ml-0 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
