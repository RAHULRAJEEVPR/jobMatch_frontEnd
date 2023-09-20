import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { adminDropCity } from "../../Services/adminApi";

export default function CityTable({ CityData }) {
  const [Citys, setCitys] = useState([]);

  useEffect(() => {
    setCitys([...CityData]);
  }, [CityData]);

  const dropCity = (id) => {
    adminDropCity({ id })
      .then((res) => {
        toast.success(res.data.message);
        setCitys((prevData) => prevData.filter((City) => City._id !== id));
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col">
      <div className=" ">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden m-2 border shadow-md">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-400 font-medium text-black dark:border-neutral-500 dark:bg-neutral-900">
                <tr className="text-lg  ">
                  <th scope="col" className="py-3">
                    NO
                  </th>
                  <th scope="col" className="py-3">
                    City
                  </th>
                  <th scope="col" className="py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {Citys.map((City, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-lg">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap font-bold text-lg px-6 py-4">
                      {City.city}
                    </td>
                    <td className="whitespace-nowrap font-bold text-lg px-6 py-4">
                      <button
                        type="button"
                        onClick={() => dropCity(City._id)}
                        className="bg-red-700 text-white p-2 rounded-md"
                      >
                        DROP
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
