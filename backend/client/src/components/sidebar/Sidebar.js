import React, { useContext, useEffect, useState } from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";
import { Context } from "../../context/login Context/Context";
import { axiosInstance } from "../../config";

const Sidebar = () => {
  const { user } = useContext(Context);
  const [category, setCategory] = useState([]);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getCategories = async () => {
      const res = await axiosInstance.get("/categories/getallcategories");
      setCategory(res.data);
    };

    getCategories();
  }, []);

  return (
    <div className="sidebar">
      {user && (
        <div className="sidebar-items">
          <span className="sidebar-title">about you.</span>
          <span className="sidebar-username">{user.username}</span>
          <img
            className="sidebar-img"
            src={
              user.profilePic
                ? PF + user.profilePic
                : "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
            }
            alt="profile-img"
          />
          <p className="sidebar-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            suscipit nobis nisi a voluptatem sint! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Omnis atque illo tenetur ducimus
            laboriosam et ab. Vitae error magnam adipisci! laboriosam et ab.
          </p>
        </div>
      )}

      <div className="sidebar-items">
        <span className="sidebar-title">categories.</span>
        <ul className="sidebar-list">
          {category.map((cat) => {
            return (
              <Link key={cat._id} to={`/?cat=${cat.name}`} className="link">
                <li>{cat.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="sidebar-items">
        <span className="sidebar-title">follow here.</span>
        <div className="sidebar-social">
          <i className="social-icons fab fa-facebook-square"></i>
          <i className="social-icons fab fa-instagram-square"></i>
          <i className="social-icons fab fa-pinterest-square"></i>
          <i className="social-icons fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
