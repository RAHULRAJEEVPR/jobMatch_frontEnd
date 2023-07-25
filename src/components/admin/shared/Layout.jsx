import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

export default function Layout() {
  const [showSideBar,setShowSideBar]=useState(true)
  return (
    <div className="flex flex-row bg-neutral-100 min-h-screen">
    <SideBar />
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex-grow overflow-y-auto">{<Outlet />}</div>
    </div>
  </div>
  );
}
