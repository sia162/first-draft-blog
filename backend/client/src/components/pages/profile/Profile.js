import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../config";
import "./profile.css";

const Profile = () => {
  const PF = "https://first-draft-blog.herokuapp.com/images/"; //npm i path --> backend

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axiosInstance.get("/posts/fetchposts", {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        });

        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="profile-title">your all posts will display here.</div>

      <div className="logged-in-users-posts">
        {posts.map((post) => {
          return (
            <Link key={post._id} className="link" to={`/post/${post._id}`}>
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
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
