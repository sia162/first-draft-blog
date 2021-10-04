import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img-section">
        <img
          className="headerimg"
          src="https://images.unsplash.com/photo-1555601568-c9e6f328489b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
          alt="blog images"
        />
        <img
          className="headerimg"
          src="https://images.unsplash.com/photo-1548946662-88f5d8135902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
          alt="blog images"
        />
        <img
          className="headerimg"
          src="https://images.unsplash.com/photo-1535182539448-8bf2aee81484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="blog images"
        />
      </div>

      <div className="header-button">
        <button>
          <Link className="link" to="/write">
            {" "}
            Publish Your First Article{" "}
          </Link>
        </button>
      </div>
      <div className="headerbackcolor"></div>
    </div>
  );
};

export default Header;
