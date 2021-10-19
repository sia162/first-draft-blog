import React, { useContext, useEffect, useState } from "react";
import "./singleblog.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/login Context/Context";
import { useHistory } from "react-router-dom";

const SingleBlog = () => {
  const PF = "http://localhost:5000/images/"; //npm i path --> backend
  let history = useHistory();
  const { user } = useContext(Context);

  const location = useLocation();
  const pathtopost = location.pathname.split("/")[2];
  const [singlePost, setSinglePost] = useState([]);

  const [titleUpdate, setTitleUpdate] = useState("");
  const [descUpdate, setDescUpdate] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + pathtopost);
      setSinglePost(res.data);
      setTitleUpdate(res.data.title);
      setDescUpdate(res.data.desc);
    };
    getPost();
  }, [pathtopost]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // HANDLE DELETE POST
  const handleDeletePost = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/posts/deletepost/${singlePost._id}`,
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      history.push("/");
    } catch (error) {}
  };

  // HANDLE UPDATE POST
  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/posts/updatepost/${singlePost._id}`,
        {
          title: titleUpdate,
          desc: descUpdate,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      setUpdateMode(false);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="single-blog">
      <div className="single-blog-section">
        <div className="single-post-head">
          {updateMode ? (
            <input
              className="single-post-title-update"
              type="text"
              autoFocus={true}
              value={titleUpdate}
              onChange={(e) => setTitleUpdate(e.target.value)}
            />
          ) : (
            <div className="single-post-title">{singlePost.title}.</div>
          )}

          <div className="single-post-info">
            <div className="author-time">
              <div className="author">
                By {""}
                <Link to={`/?user=${singlePost.username}`} className="link">
                  <span style={{ color: "#8c8b8b", fontStyle: "italic" }}>
                    {singlePost.username}
                  </span>
                </Link>
              </div>
              <div className="date-time">
                {new Date(singlePost.createdAt).toDateString()}
              </div>
            </div>

            {singlePost.username === user?.username && (
              <div className="single-post-edit-icons">
                <i
                  className="edit-icons  far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="edit-icons  far fa-trash-alt"
                  onClick={handleDeletePost}
                ></i>
              </div>
            )}
          </div>
        </div>

        {singlePost.photo && <img src={PF + singlePost.photo} alt="bloging" />}

        {updateMode ? (
          <textarea
            className="single-post-content-update"
            value={descUpdate}
            onChange={(e) => setDescUpdate(e.target.value)}
          ></textarea>
        ) : (
          <div className="single-post-content">{singlePost.desc}</div>
        )}

        {updateMode && (
          <button className="updatePostBtn" onClick={handleUpdate}>
            update.
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
