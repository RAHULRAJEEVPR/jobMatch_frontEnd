import React, { useState, useEffect } from "react";
import JobSearch from '../../components/user/JobSearch'
import JobPost from '../../components/user/JobPost'
import { userGetAllPost } from '../../Services/userApi';
import { showLoading,hideLoading } from "../../Redux/alertSlice";
import { useSelector,useDispatch } from "react-redux";


export default function UserHome() {
  const dispatch=useDispatch()
  const [allPosts,setAllPost]=useState([])
  const [posts, setPosts] = useState([]);
  const [search,setSearch] =useState({
    city:"",
    skill:""
  })

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  
    const filteredDocuments = allPosts.filter((post) => {
      const isCityMatch = search.city === "" || post.location === search.city;
      const isSkillMatch = search.skill === "" || post.skills.includes(search.skill);
  
      return isCityMatch && isSkillMatch;
    });
  
    console.log(filteredDocuments);
    setPosts(filteredDocuments);
  };
  

  useEffect(() => {
    dispatch(showLoading())
    userGetAllPost()
      .then((res) => {
        dispatch(hideLoading())
        setPosts(res.data.postData)
        setAllPost(res.data.postData);
        console.log(res.data.postData);
        
      })
      .catch((err) => {
        dispatch(hideLoading())
        console.log(err);
      });
  }, []);
  return ( 
    <div>
     <div className=''>
      <JobSearch setSearch={setSearch} handleSearch={handleSearch} />
      </div>   
      <div className="bg-white h-3"></div>
      <div className='text-3xl text-center text-blue-950 font-extrabold  my-3'>
      Latest Job Offers
      </div>
      <JobPost posts={posts}/>
    </div>
  )
}
