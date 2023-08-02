import React, { useState, useEffect } from "react";
import success from "../../assets/success.png";
import style from "./styles.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../constants/constants";

export default function EmpEmailVerify() {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `${BaseUrl}/employer/${params.id}/verify/${params.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
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
