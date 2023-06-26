import React, { useEffect, useState } from "react";
import AddSkills from "../../components/admin/AddSkills";
import SkillsTable from "../../components/admin/SkillsTable";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { adminSkillDetails } from "../../Services/adminApi";

export default function Skills() {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState([]);
  const fetchData = () => {
    adminSkillDetails()
      .then((res) => {
        setSkill(res.data.skillData);
      })
      .catch((err) => {
        dispatch(hideLoading());
        console.log(err);
      });
  };
  useEffect(() => {
    dispatch(showLoading());
    fetchData();
    dispatch(hideLoading());
  }, []);

  console.log(skill);
  return (
    <div>
      <AddSkills fetchData={fetchData} />
      <SkillsTable skillData={skill} />
    </div>
  );
}
