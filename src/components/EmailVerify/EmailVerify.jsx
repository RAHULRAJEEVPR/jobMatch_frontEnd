import React, { useState, useEffect } from "react";
import success from "../../assets/success.png";
import style from "./styles.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../../constants/constants";

export default function EmailVerify() {
  const dispatch = useDispatch();
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `${BaseUrl}/user/${params.id}/verify/${params.token}`;
        const { data } = await axios
          .get(url)
          .then((res) => {
            setValidUrl(true);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    verifyEmailUrl();
  }, [params]);

  return (
    <>
      {validUrl ? (
        <div className={style.container}>
          <img src={success} alt="success_img" className={style.success_img} />
          <h1>Email verified successfully</h1>
          <Link to="/">
            <button className={style.green_btn}>Home</button>
          </Link>
        </div>
      ) : (
        <h1>404 not found</h1>
      )}
    </>
  );
}
