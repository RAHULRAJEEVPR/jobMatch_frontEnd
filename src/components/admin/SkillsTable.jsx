import React, { useState, useEffect } from 'react';

import { adminDropSkill } from '../../Services/adminApi';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../../Redux/alertSlice';

export default function SkillsTable({ skillData }) {
  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([...skillData]);
  }, [skillData]);

  const dropSkill = (id) => {
    adminDropSkill({ id })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setSkills((prevData) => prevData.filter((skill) => skill._id !== id));
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden m-2 border shadow-md">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-400 font-medium text-blacj dark:border-neutral-500 dark:bg-neutral-900">
                <tr className="text-lg  ">
                  <th scope="col" className="py-3">
                    NO
                  </th>
                  <th scope="col" className="py-3">
                    SKILL
                  </th>
                  <th scope="col" className="py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {Skills.map((skill, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-lg">{index + 1}</td>
                    <td className="whitespace-nowrap font-bold text-lg px-6 py-4">{skill.skill}</td>
                    <td className="whitespace-nowrap font-bold text-lg px-6 py-4">
                      <button
                        type="button"
                        onClick={() => dropSkill(skill._id)}
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
