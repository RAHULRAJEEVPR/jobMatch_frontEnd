import React, { useEffect, useState } from "react";
import { skillData } from "../../../Services/EmpApi";
export default function EmpSearchuser({set}) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    skillData()
      .then((res) => {
        setSkills(res.data.skillData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-screen">
      <div>
        <h1 className="font-bold font-serif text-xl md:text-3xl ms-7 md:ms-24 lg:text-5xl mt-14">
          Discover Top Tech Talent for Your Company
        </h1>
      </div>
      <form>
        <div className="font-semibold grid-cols-2 flex flex-row flex-wrap items-center m-6 md:ms-24">
          <div className="w-full md:w-4/6 mb-3 md:mb-0">
            <select
              id="skill"
              onChange={(e)=>set(e.target.value)}
              className="bg-white shadow-lg border border-gray-300 text-gray-950 text-lg rounded-lg w-full lg:ms-2 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            >
              <option value="">Choose a skill</option>
              {skills.map((skill, i) => (
                <option key={i} value={skill.skill}>
                  {skill.skill}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/6">
            <button
              type="submit"
              className="bg-blue-950 rounded-md text-white w-full text-lg p-3 lg:ms-5 font-bold"
            >
              SEARCH
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
