import React from "react";

export default function Categorys({ set, status }) {
  return (
    <div className=" md:mx-24 my-4">
      <div class="flex justify-between ">
        <div
          onClick={() => set("Pending")}
          class={`w-full border flex justify-center cursor-pointer  items-center  md:text-2xl font-bold py-2 rounded-lg  ${
            status === "Pending" ? "bg-gray-500 text-white" : "bg-white"
          } shadow-lg  border-gray-400 `}
        >
          PENDING
        </div>
        <div
          onClick={() => set("Selected")}
          class={`w-full border flex justify-center cursor-pointer  items-center  md:text-2xl font-bold py-2 rounded-lg  ${
            status === "Selected" ? "bg-gray-500 text-white" : "bg-white"
          } shadow-lg  border-gray-400 `}
        >
          <button>SELECTED</button>
        </div>
        <div
          onClick={() => set("Rejected")}
          class={`w-full border flex justify-center cursor-pointer items-center  md:text-2xl font-bold py-2 rounded-lg  ${
            status === "Rejected" ? "bg-gray-500 text-white" : "bg-white"
          } shadow-lg  border-gray-400 `}
        >
          REJECTED
        </div>
      </div>
    </div>
  );
}
