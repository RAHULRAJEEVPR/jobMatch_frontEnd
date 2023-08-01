import React, { useState, useEffect } from "react";
import NewJobPost from "../../components/employer/home/NewJoBPost";
import EmpPostCard from "../../components/employer/home/EmpPostCard";
import ViewAllPostTab from "../../components/employer/home/ViewAllPostTab";
import { skillData, cityData, getActivePostData } from "../../Services/EmpApi";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PreModal from "../../components/employer/home/PreModal";

export default function EmpHome() {
  const empData = useSelector((state) => state.emp.empData);
  console.log(empData, "hai");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [skills, setSkills] = useState([]);
  const [citys, setCitys] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(showLoading());
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
    getActivePostData()
      .then((res) => {
        dispatch(hideLoading());

        setPosts(res.data.postData);
      })
      .catch((err) => {
        dispatch(hideLoading());
        console.log(err);
      });
  }, []);
  

  return (
    <div>
      <div className="flex flex-row items-center md:mx-20 mx-3 mt-9 justify-between">
        <div className="md:text-4xl font-black   ">WELCOME BACK, Employer</div>
        {empData.postCount <= 0 || empData.isPremium == true ? (
          <NewJobPost skills={skills} citys={citys} setPosts={setPosts} />
        ) : (
          <div>
            <PreModal />
          </div>
        )}
      </div>

      <ViewAllPostTab />
      {posts.length != 0 ? (
        <>
          <div>
            <EmpPostCard
              posts={posts.filter((post)=>post.status=="Active")}
              skills={skills}
              citys={citys}
              setPosts={setPosts}
            />
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-20">
          <h1 className="text-3xl font-bold">You Dont Have Any Active Posts</h1>
        </div>
      )}
    </div>
  );
}
