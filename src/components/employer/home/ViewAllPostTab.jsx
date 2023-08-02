import React from "react";
import { Link } from "react-router-dom";

export default function ViewAllPostTab() {
  return (
    <div className="bg-white md:mx-14 border justify-between items-center flex flex-row border-gray-400 rounded-lg m-3 md:p-4 p-3 shadow-xl     ">
      <div>
        <h1 className="md:text-2xl text-center font-bold ">
          Your Active Posts
        </h1>
      </div>
      <div className="">
        <Link to={"/employer/allposts"}>
          <button className="md:text-2xl text-center font-extrabold text-blue-900">
            {" "}
            View All posts
          </button>
        </Link>
      </div>
    </div>
  );
}
