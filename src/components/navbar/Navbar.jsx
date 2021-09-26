import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import navimg from "./profile.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="blogname">
        <h3>First Draft</h3>
        <h4>A BLOG FOR YOUR THOUGHTS</h4>
      </div>
      <div className="navbar">
        <div className="nav-left">
          <i className="social-icons fab fa-facebook-square"></i>
          <i className="social-icons fab fa-instagram-square"></i>
          <i className="social-icons fab fa-pinterest-square"></i>
          <i className="social-icons fab fa-twitter-square"></i>
        </div>

        <div className="nav-center">
          <ul>
            <li>
              <Link className="nav-links" to="/">
                {" "}
                home.
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/about">
                {" "}
                about.
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/write">
                {" "}
                write.
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/profile">
                {" "}
                profile.
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/logout">
                {" "}
                logout.
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <img className="profileImg" src={navimg} alt="none" />
          <i className="search-icon fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
