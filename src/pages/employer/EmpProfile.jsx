import React from "react";
import { useSelector } from "react-redux";
import EmpPropic from "../../components/employer/Profile/EmpPropic";
import EmpAbout from "../../components/employer/Profile/EmpAbout";
import EmpBasicInfo from "../../components/employer/Profile/EmpBasicInfo";
import { useNavigate } from "react-router-dom";

export default function EmpProfile() {
  const navigate = useNavigate();
  const empData = useSelector((state) => state.emp.empData);
  console.log(empData);

  return (
    <div className="grid lg:grid-cols-4 mt-6 lg:mx-9 mx-4 md:me-2 mb-5 ">
      <div className="col-span-4 lg:col-span-1 ">
        <EmpPropic empData={empData} />
        {empData.isPremium ? (
          <div className="bg-yellow-400 text-white p-3 rounded-xl md:mx-8 flex mb-3 border border-gray-500 cursor-pointer  shadow-md ">
            <button className="text-xl  mx-auto font-bold  uppercase ">
              premium{" "}
            </button>
          </div>
        ) : (
          <div className="bg-sky-700 text-white p-3 rounded-xl md:mx-8 flex mb-3 border border-gray-500 cursor-pointer hover:bg-sky-800 shadow-md ">
            <button
              onClick={() => navigate("/employer/subscription")}
              className="text-xl  mx-auto font-bold uppercase "
            >
              subscribe
            </button>
          </div>
        )}
      </div>

      <div className="lg:col-span-3 col-span-4 lg:me-20">
        {/* <div className='flex justify-end mb-2'>
          <button className='text-white bg-sky-700 py-1 px-3 font-bold text-xl uppercase rounded-md'>subscribe</button>
        </div> */}
        <EmpAbout empData={empData} />
        <EmpBasicInfo empData={empData} />
      </div>
    </div>
  );
}
