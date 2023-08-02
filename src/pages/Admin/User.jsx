import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import UserTable from "../../components/admin/UserTable";
import { adminUserDetails, changeUserStaus } from "../../Services/adminApi";
import { showLoading, hideLoading } from "../../Redux/alertSlice";

export default function User() {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoading());
    adminUserDetails().then((res) => {
      dispatch(hideLoading());

      setUserData(res.data.userData);
    });
  }, []);

  const changeStatus = (id, status) => {
    changeUserStaus({ id: id, status: status })
      .then((res) => {
        setUserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <UserTable change={changeStatus} userData={userData} />
    </div>
  );
}
