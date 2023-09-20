import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const links = [
  { path: "/employer/Profile", label: "Profile", key: "Profile" },
  { path: "/employer/logout", label: "Logout", key: "Logout" },
];

export default function EmpNavbar() {
  const navigate = useNavigate();
  const logout = () => {
    // console.log("logout called");
    localStorage.removeItem("empJwt");
    navigate("/employer/login");
  };
  return (
    <nav className="bg-blue-950  ">
      <div className="bg-blue-950 p-5 flex  items-center">
        <span
          onClick={() => navigate("/employer/")}
          className="text-white font-black text-4xl"
        >
          JobMatch
        </span>
        <div className="flex ml-auto me-4">
          <Link to={"/employer/message"}>
            <div className="text-white text-4xl flex me-4 items-center">
              <AiOutlineMessage />
            </div>
          </Link>
          <Menu>
            <Menu.Button>
              <div className="text-white text-4xl ">
                <RxAvatar />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-200 ease-out"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition duration-100 ease-in"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-12 top-14 mt-2 w-48 border  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {links.map((link) => (
                  <Menu.Item key={link.key}>
                    {({ active }) => (
                      <span
                        onClick={() => {
                          link.path == "/employer/Profile"
                            ? navigate(link.path)
                            : logout();
                        }} // Wrap navigate in an arrow function or a callback function
                        className={`${
                          active && "bg-blue-900 text-white"
                        } block px-4 border font-bold py-2 text-lg text-gray-700`}
                      >
                        {link.label}
                      </span>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
