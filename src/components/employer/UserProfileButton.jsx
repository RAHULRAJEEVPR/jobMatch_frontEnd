import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfileButton({ id }) {
  const navigate = useNavigate();
  const navigateToProfile = (id) => {
    navigate("/employer/applicants/profile",{state:{id}});
  };
  return (
    <>
      <button
        onClick={() => navigateToProfile (id)}
        className="bg-blue-950 text-white mb:text-xl   mb-2 rounded-lg font-semibold py-1 px-4"
      >
        PROFILE
      </button>
    </>
  );
}
 