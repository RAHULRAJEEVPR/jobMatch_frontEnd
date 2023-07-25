import React, { useState, useEffect } from 'react';


import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../../Redux/alertSlice';
import { adminDropCity } from '../../Services/adminApi';

export default function CityTable({ CityData }) {
  const [Citys, setCitys] = useState([]);

  useEffect(() => {
    setCitys([...CityData]);
  }, [CityData]);

  const dropCity = (id) => {
    adminDropCity({ id })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setCitys((prevData) => prevData.filter((City) => City._id !== id));
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
 

<body class="flex items-center justify-center min-h-screen bg-gray-100">
<div class="container px-4 mx-auto sm:px-6 lg:px-8">
  <div class="overflow-x-auto">
    <table class="w-full table-auto sm:bg-white rounded-lg overflow-hidden shadow-lg my-5">
      <thead class="text-white bg-gray-600">
        <tr>
          <th class="p-3 text-left">No</th>
          <th class="p-3 text-left">city</th>
          <th class="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody class="flex-row">
      {Citys.map((City, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-lg">{index + 1}</td>
                    <td className="whitespace-nowrap font-bold text-lg px-6 py-4">{City.city}</td>
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
</body>

  );
}
