import React from "react";
import { Link } from "react-router-dom";
import postimg from "./p1.jpg";
import "./post.css";

const Post = () => {
  return (
    <>
      <Link className="single-blog-link" to="/single-blog">
        <div className="post">
          <img src={postimg} alt="" className="post-img" />
          <div className="post-info">
            <div className="post-categories">
              <span className="post-cat">Poetry</span>
              <span className="post-cat">Lifestyle</span>
            </div>
            <div className="post-title">Lorem, ipsum dolor.</div>
            <div className="post-date">1 hour ago</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
