import React, { useState, useEffect } from "react";
import JobSearch from "../../components/user/JobSearch";
import JobPost from "../../components/user/userJobPost/JobPost";
import { userGetAllPost } from "../../Services/userApi";
import { showLoading, hideLoading } from "../../Redux/alertSlice";
import { useSelector, useDispatch } from "react-redux";

export default function UserHome() {
  const dispatch = useDispatch();
  const [allPosts, setAllPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState({
    city: "",
    skill: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredDocuments = allPosts.filter((post) => {
      const isCityMatch = search.city === "" || post.location === search.city;
      const isSkillMatch =
        search.skill === "" || post.skills.includes(search.skill);

      return isCityMatch && isSkillMatch;
    });

    setPosts(filteredDocuments);
  };

  useEffect(() => {
    dispatch(showLoading());
    userGetAllPost()
      .then((res) => {
        dispatch(hideLoading());
        setPosts(res.data.postData);
        setAllPost(res.data.postData);
      })
      .catch((err) => {
        dispatch(hideLoading());
        console.log(err);
      });
  }, []);
  return (
    <div className="">
      <div className="">
        <JobSearch setSearch={setSearch} handleSearch={handleSearch} />
      </div>
      <div className="bg-white h-3"></div>
      {posts.length !== 0 ? (
        <div className="text-3xl text-center text-blue-950 font-extrabold my-3">
          Latest Job Offers
        </div>
      ) : (
        <div className="text-3xl text-center mt-32 text-blue-950 font-extrabold my-3">
          oops No Job Posts avilable right now
        </div>
      )}
      {posts.length !== 0 && <JobPost posts={posts} />}
    </div>
  );
}
