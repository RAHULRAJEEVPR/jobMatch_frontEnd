import React from 'react'
import { useSelector } from 'react-redux';
import EmpPropic from '../../components/employer/Profile/EmpPropic';
import EmpAbout from '../../components/employer/Profile/EmpAbout';
import EmpBasicInfo from '../../components/employer/Profile/EmpBasicInfo';




export default function EmpProfile() {
    const empData = useSelector((state) => state.emp.empData);
    console.log(empData)

  return (
    <div className="grid lg:grid-cols-4 mt-6 lg:mx-9 mx-4 md:me-2 mb-5 ">
      <div className="col-span-4 lg:col-span-1 ">
<EmpPropic empData={empData} />
{/* <div className="bg-white p-3 rounded-xl md:mx-8 flex mb-3 border border-gray-500 cursor-pointer hover:bg-gray-300 shadow-md ">
          <button className="text-xl  mx-auto font-bold ">My Requests</button>
        </div> */}


      </div>
      <div className="lg:col-span-3 col-span-4 lg:me-20">
<EmpAbout empData={empData}/>
<EmpBasicInfo empData={empData}/>

      </div>
    </div>
  )
}
