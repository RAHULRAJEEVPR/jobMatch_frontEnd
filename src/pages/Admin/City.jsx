import React, { useEffect, useState } from "react";
import AddCity from "../../components/admin/AddCity";
import { adminAddCity, adminCityDetails } from "../../Services/adminApi";
import { toast } from "react-toastify";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import CityTable from "../../components/admin/CityTable";
import { useDispatch } from "react-redux";

export default function City() {
  const dispatch = useDispatch();
  const [citys, setCitys] = useState([]);
  const [city, setCity] = useState("");

  const fetchData = () => {
    adminCityDetails()
      .then((res) => {
        setCitys(res.data.cityData);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(city);

    try {
      if (city.trim() === "") {
        return toast.warn("city should't be empty");
      }
      adminAddCity({ city })
        .then((res) => {
          toast.success(res.data.message)
          fetchData()
        })
        .catch((error) => {
          toast.warn(error.response.data.message);
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <AddCity set={setCity} addSkillFun={handleSubmit} />
      <CityTable CityData={citys} />
    </div>
  );
}
