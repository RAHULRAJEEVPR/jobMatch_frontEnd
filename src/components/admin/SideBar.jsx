import React, { useState } from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/sideConstants";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const linkClass =
  "flex items-center gap-2 font-light px-3     py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-sm text-base ";
export default function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="bg-stone-600 text-white flex   flex-col w-60 p-3">
      <div
        onClick={() => navigate("/admin")}
        className=" flex items-center gap-2 px-2 py-3   "
      >
        <h1 className="md:text-3xl font-black">JobMATCH</h1>
      </div>
      <div className=" flex-1 py-8 flex flex-col gap-1.5 ">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      className={classNames(
        pathname === item.path ? "bg-neutral-500 " : "text-white",
        "text-white cursor-pointer",
        linkClass
      )}
      to={item.path}
    >
      <div className="font-semibold">{item.label}</div>
    </Link>
  );
}
