import React, { useEffect, useState } from 'react'
import PostsTable from '../../components/admin/shared/PostsTable'
import { adminGetAllPosts } from '../../Services/adminApi'

export default function AdminAllPosts() {
    const [allpost,setAllPost]=useState([])
    useEffect(()=>{
        adminGetAllPosts().then((res)=>{
            setAllPost(res.data.postData)
            console.log(res.data.postData);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
      <PostsTable posts={allpost}/>
    </div>
  )
}
