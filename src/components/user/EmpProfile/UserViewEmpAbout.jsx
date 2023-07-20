import React from "react";

export default function UserViewEmpAbout({ empData }) {
  return (
    <div className="bg-white border border-gray-500 shadow-md rounded-xl ">
      <div className="p-4">
        <div className="flex">
          <span className="lg:text-3xl text-2xl font-semibold">ABOUT</span>
        </div>
        <div className="mt-3">
          <span className="text-lg font-serif fon">
            {" "}
            {empData.about ? empData.about : "About not Added"}
          </span>
        </div>
      </div>
    </div>
  );
}
