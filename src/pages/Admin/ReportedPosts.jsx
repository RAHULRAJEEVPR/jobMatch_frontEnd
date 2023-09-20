import React, { useEffect, useState } from "react";
import {
  adminGetReportdPosts,
  changePostStatus,
} from "../../Services/adminApi";
import RePostsTable from "../../components/admin/RePostsTable";

export default function ReportedPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    adminGetReportdPosts().then((res) => {
      setPosts(res.data.reportedPosts);
      
    });
  }, []);
  const changeStatus = (id, status) => {
    changePostStatus({ id: id, status: status })
      .then((res) => {
        setPosts(res.data.reportedPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (posts.length == 0) return;
  return (
    <div>
      {posts.length !== 0 ? (
        <RePostsTable change={changeStatus} posts={posts} />
      ) : (
        <div>xcv</div>
      )}
    </div>
  );
}
