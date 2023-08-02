import React from "react";

export default function AllPostFilter({ set, status }) {
  return (
    <div className=" md:mx-24 my-4">
      <div class="flex justify-between ">
        <div
          onClick={() => set("Active")}
          class={`w-full border flex justify-center cursor-pointer  items-center  md:text-2xl font-bold py-2 rounded-lg 
       ${status === "Active" ? "bg-gray-500 text-white" : "bg-white"} 
       shadow-lg  border-gray-400 `}
        >
          Active
        </div>
        <div
          onClick={() => set("Completed")}
          class={`w-full border flex justify-center cursor-pointer  items-center  md:text-2xl font-bold py-2 rounded-lg 
       ${status === "Completed" ? "bg-gray-500 text-white" : "bg-white"} 
       shadow-lg  border-gray-400 `}
        >
          Completed
        </div>
      </div>
    </div>
  );
}
