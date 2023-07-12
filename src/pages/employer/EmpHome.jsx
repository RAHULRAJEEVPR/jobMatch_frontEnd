import React, { useState, useEffect } from "react";
import NewJobPost from "../../components/employer/NewJoBPost";
import EmpPostCard from "../../components/employer/EmpPostCard";
import ViewAllPostTab from "../../components/employer/ViewAllPostTab";
import { skillData, cityData, getPostData } from "../../Services/EmpApi";
import { showLoading,hideLoading } from "../../Redux/alertSlice";
import { useDispatch } from "react-redux";

export default function EmpHome() {
  const dispatch=useDispatch()
  const [skills, setSkills] = useState([]);
  const [citys, setCitys] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    skillData()
      .then((res) => {
        setSkills(res.data.skillData);
      })
      .catch((err) => {
        console.log(err);
      });
    cityData()
      .then((res) => {
        setCitys(res.data.cityData);
      })
      .catch((err) => {
        console.log(err);
      });
    getPostData()
      .then((res) => {
        setPosts(res.data.postData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   
  
  
  return (
    <div>
      <div className="flex flex-row items-center md:mx-20 mx-3 mt-9 justify-between">
        <div className="md:text-4xl font-black   ">WELCOME BACK, Employer</div>
        <NewJobPost skills={skills} citys={citys} setPosts={setPosts} />
      </div>
      <ViewAllPostTab  />
      <div>
        <EmpPostCard posts={posts} />
      </div>
    </div>
  );
}
