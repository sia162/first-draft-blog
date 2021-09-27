import React from "react";
import Post from "../post/Post";
import "./posts.css";

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts-section-title">all posts.</div>
      <div className="all-posts">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
