import React, { useState } from "react";

export default function JobPost({ posts }) {
  const [currentPage, setCurrentpage] = useState(1);
  const postPerPage = 3;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(posts.length / postPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const nextPage=()=>{
    if(currentPage!==nPage){
      setCurrentpage(currentPage+1)
    }
  }
  const prevPage=()=>{
if(currentPage!==1){
  setCurrentpage(currentPage-1)
}
  }
  const changeCPage=(id)=>{
setCurrentpage(id)
  }
  return (
    <>
      {records.map((post, index) => (
        <div
          key={index}
          className="bg-white md:mx-24 border grid md:grid-cols-2 m-3 md:p-4 p-3 shadow-xl border-gray-400 rounded-xl"
        >
          <div className="flex flex-col">
            <div className="my-1">
              <span className="md:text-3xl text-stone-950 font-bold">
                Role : {post.role}
              </span>
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
          </div>
          <div className="flex flex-col">
            <div className="flex md:justify-end">
              <button className="bg-blue-900 text-white md:text-lg md:p-3 p-2 md:px-5 font-bold rounded-md">
                VIEW DETAILS
              </button>
            </div>
            <div className="flex md:justify-end mt-auto me-9 ">
              <span className="md:text-xl font-bold">
                Status :<span className="text-green-500">{post.status}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
<div className="flex justify-end md:me-20 font-black">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px m-5">
          <li>
            <button
              onClick={prevPage}
              class={`px-3 ${currentPage===1?"hidden":""} py-2 ml-0 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li>
              <button onClick={()=>{changeCPage(n)}} key={i} class={`px-3 ${currentPage===n ?'bg-yellow-300':''} py-2 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
               {n}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={nextPage}
              class={`px-3 ${currentPage===nPage?"hidden":""} py-2 ml-0 leading-tight  text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
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