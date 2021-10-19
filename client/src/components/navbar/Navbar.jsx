import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/login Context/Context";
import "./navbar.css";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <div className="blogname">
        <h3>First Draft</h3>
        <h4>A BLOG FOR YOUR THOUGHTS</h4>
      </div>
      <div className="navbar">
        {user && (
          <div className="nav-left">
            <i className="social-icons fab fa-facebook-square"></i>
            <i className="social-icons fab fa-instagram-square"></i>
            <i className="social-icons fab fa-pinterest-square"></i>
            <i className="social-icons fab fa-twitter-square"></i>
          </div>
        )}

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
              {user && (
                <Link className="nav-links" to="/write">
                  {" "}
                  write.
                </Link>
              )}
            </li>
            <li>
              {user ? (
                <Link className="nav-links" to="/profile">
                  {" "}
                  profile.
                </Link>
              ) : (
                <Link className="nav-links" to="/login">
                  login.
                </Link>
              )}
            </li>

            <li>
              {user ? (
                <Link
                  to="/"
                  className="nav-links"
                  id="logoutlink"
                  onClick={handleLogout}
                >
                  logout.
                </Link>
              ) : (
                <Link className="nav-links link" to="/register">
                  register.
                </Link>
              )}
            </li>
          </ul>
        </div>

        {user && (
          <div className="nav-right">
            <Link to="/settings">
              {user.profilePic ? (
                <img
                  className="profileImg"
                  src={PF + user.profilePic}
                  alt="none"
                />
              ) : (
                <img
                  className="profileImg"
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                  alt="none"
                />
              )}
            </Link>

            <i className="search-icon fas fa-search"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
