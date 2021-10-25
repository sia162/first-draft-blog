import React from "react";
import { Link } from "react-router-dom";

// import postimg from "./p1.jpg";
import "./post.css";

const Post = ({ post }) => {
  const PF = "https://first-draft-blog.herokuapp.com/images/"; //npm i path --> backend

  return (
    <>
      <Link className="link" to={`/post/${post._id}`}>
        <div className="post">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="post-img" />
          )}
          <div className="post-info">
            <div className="post-categories">
              {[post.categories].map((cat) => {
                return (
                  <span key={post._id} className="post-cat">
                    {cat}
                  </span>
                );
              })}
            </div>
            <div className="post-title">{post.title}.</div>
            <div className="post-user">by - {post.username}.</div>
            <div className="post-date">
              {new Date(post.createdAt).toDateString()}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
