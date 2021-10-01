import React, { useEffect, useState } from "react";
import "./sidebar.css";
import profileimg from "./profile.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const user = false;
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/categories/getallcategories"
      );
      setCategory(res.data);
    };

    getCategories();
  }, []);

  return (
    <div className="sidebar">
      {user && (
        <div className="sidebar-items">
          <span className="sidebar-title">about you.</span>
          <img className="sidebar-img" src={profileimg} alt="profile-img" />
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
              <Link to={`/?cat=${cat.name}`} className="link">
                <li key={cat._id}>{cat.name}</li>
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
