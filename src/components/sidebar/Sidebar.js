import React from "react";
import "./sidebar.css";
import profileimg from "./profile.jpg";

const Sidebar = () => {
  const user = true;

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
          <li>Article</li>
          <li>Poetry</li>
          <li>Lifestyle</li>
          <li>Music</li>
          <li>Sport</li>
          <li>Tech</li>
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
