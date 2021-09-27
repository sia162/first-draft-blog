import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-title">login here.</div>
      <form className="login-form">
        <label>email.</label>
        <input type="text" placeholder="enter your email." />

        <label>password.</label>
        <input type="password" placeholder="enter your password." />

        <div className="login-signup-btns">
          <button className="ls-btn login-btn">login.</button>
          <button className="ls-btn register-in-btn">
            <Link className="link" to="/register">
              {" "}
              register.{" "}
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
