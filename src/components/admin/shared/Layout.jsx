import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen  w-screen ">
      

      <SideBar />
      
      <div className="w-screen flex flex-col">
        <Navbar />
        <div className="overflow-auto">{<Outlet />}</div>
      </div>
    </div>
  );
}
