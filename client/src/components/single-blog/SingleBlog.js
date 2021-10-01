import React, { useEffect, useState } from "react";
import "./singleblog.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  const location = useLocation();
  const pathtopost = location.pathname.split("/")[2];
  const [singlePost, setSinglePost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/posts/" + pathtopost
      );
      console.log(res);
      setSinglePost(res.data);
    };

    getPost();
  }, [pathtopost]);

  return (
    <div className="single-blog">
      <div className="single-blog-section">
        <div className="single-post-head">
          <div className="single-post-title">{singlePost.title}.</div>
          <div className="single-post-info">
            <div className="author-time">
              <div className="author">
                by -
                <Link to={`/?user=${singlePost.username}`} className="link">
                  <span>{singlePost.username}</span>
                </Link>
              </div>
              <div className="date-time">
                {new Date(singlePost.createdAt).toDateString()}
              </div>
            </div>

            <div className="single-post-edit-icons">
              <i className="edit-icons  far fa-edit"></i>
              <i className="edit-icons  far fa-trash-alt"></i>
            </div>
          </div>
        </div>

        {singlePost.photo && <img src={singlePost.photo} alt="bloging" />}

        <div className="single-post-content">{singlePost.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
