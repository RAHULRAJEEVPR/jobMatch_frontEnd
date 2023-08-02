import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const links = [
  // { path: "/user/profile", label: "Profile", key: "Profile" },
  { path: "/emp/logout", label: "Logout", key: "Logout" },
];

export default function Navbar({ change, value }) {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("adminJwt");

    navigate("/admin/login");
  };
  return (
    <div className="bg-white h-16 px-4 shadow-md mb-4 border   flex justify-between items-center">
      <div
        onClick={() => {
          change(value ? false : true);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className=" flex flex-col items-center gap-2 mr-2">
        <Menu>
          <Menu.Button>
            <div className="text-black font-bold text-2xl">ADMIN</div>
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
            <Menu.Items className="origin-top-right absolute right-12 top-14 mt-2 w-48 border rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {links.map((link) => (
                <Menu.Item key={link.key}>
                  {({ active }) => (
                    <span
                      onClick={() => {
                        link.path == "/emp/profile"
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
  );
}
