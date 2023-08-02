import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EmpSearchuser from "../../components/employer/FindTalent/EmpSearchuser";
import UserCard from "../../components/employer/FindTalent/UserCard";
import { empSearchUser } from "../../Services/EmpApi";
import { toast } from "react-toastify";
import { getSinglePostData } from "../../Services/EmpApi";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { useDispatch } from "react-redux";

export default function FindTalents() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};
  const [postData, setPostData] = useState({});
  const [skill, setSkill] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    empSearchUser({ skill })
      .then((res) => {
        setUserData(res.data.userData);
      })
      .catch((err) => console.log(err));
  }, [skill]);

  useEffect(() => {
    dispatch(showLoading());
    getSinglePostData(id)
      .then((res) => {
        setPostData(res.data.postData);
        dispatch(hideLoading());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoading());
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return;
  }

  return (
    <>
      <div>
        <EmpSearchuser set={setSkill} />
      </div>
      <div className="bg-white h-3"></div>
      {!isLoading &&
      (userData.length !== 0 || Object.keys(postData).length !== 0) ? (
        <div>
          <UserCard userData={userData} postData={postData} set={setPostData} />
        </div>
      ) : (
        <div className="flex">
          <h1 className="md:mx-auto font-serif font-bold md:text-4xl text-xl mx-10 mt-28">
            No Job seekers are available at this moment !!!
          </h1>
        </div>
      )}
    </>
  );
}
