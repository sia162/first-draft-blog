import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register-title">register here.</div>
      <form className="register-form">
        <label>username.</label>
        <input type="text" placeholder="enter your username." />
        <label>email.</label>
        <input type="text" placeholder="enter your email." />

        <label>password.</label>
        <input type="password" placeholder="enter your password." />

        <div className="register-signup-btns">
          <button className="ls-btn register-btn">register.</button>
          <button className="ls-btn login-in-btn">
            <Link className="link" to="/login">
              {" "}
              login in.{" "}
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
