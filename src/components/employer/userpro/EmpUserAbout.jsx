import React from "react";

export default function EmpUserAbout({ userAbout }) {
  return (
    <div className="bg-white border border-gray-500 shadow-md rounded-xl ">
      <div className="p-4">
        <div className="flex">
          <span className="lg:text-3xl text-2xl font-semibold">ABOUT</span>
        </div>
        <div className="mt-3">
          {userAbout ? (
            <span className="text-lg font-serif fon"> {userAbout}</span>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
