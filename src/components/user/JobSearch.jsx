import React, { useEffect, useState } from "react";
import { userGetCityDetails, userGetSkillsData } from "../../Services/userApi";

export default function JobSearch({ setSearch, handleSearch }) {
  const [citys, setCitys] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    userGetCityDetails()
      .then((res) => {
        setCitys(res.data.cityData);
      })
      .catch((err) => {
        console.log(err);
      });
    userGetSkillsData()
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
        <h1 className="font-extrabold text-xl md:text-3xl ms-7 md:ms-24 lg:text-5xl mt-14">
          One Search, Millions of Jobs
        </h1>
      </div>
      <form onSubmit={handleSearch}>
      <div className="font-semibold grid-cols-2 flex flex-row flex-wrap items-center m-6 md:ms-24">
       
        <div className="w-full md:w-2/6 mb-3 md:mb-0">
          <select
           onChange={(event) => setSearch(prevState => ({ ...prevState, city: event.target.value }))}

            id="city"
            className="bg-white shadow-lg border border-gray-300 text-gray-950 text-lg rounded-lg w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="">Choose a city</option>
            {citys.map((city,i)=>(
            <option key={i} value={city.city}>{city.city}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-2/6 mb-3 md:mb-0">
          <select
            id="skill"
            onChange={(event) => setSearch(prevState => ({ ...prevState, skill: event.target.value }))}

            className="bg-white shadow-lg border border-gray-300 text-gray-950 text-lg rounded-lg w-full lg:ms-2 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="">Choose a skill</option>
            {skills.map((skill,i)=>(
            <option  key={i} value={skill.skill}>{skill.skill}</option>
            ))}
         
          </select>
        </div>
        <div className="w-full md:w-1/6">
          <button type="submit" className="bg-blue-950 text-white w-full text-lg p-2.5 lg:ms-5 font-bold">
            SEARCH
          </button>
        </div>
       
      </div>
      </form>
    </div>
  );
}
