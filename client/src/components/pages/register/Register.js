import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./register.css";
import axios from "axios";

import "../../../responsive/register-responsive.css";

const Register = () => {
  let [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  let [error, setError] = useState(false);
  const history = useHistory();

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/api/auth/register", {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      });
      console.log(res);

      if (res.data) {
        history.push("/login");
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="register-title">register here.</div>
      <form className="register-form" onSubmit={handleRegister}>
        <label>username.</label>
        <input
          type="text"
          placeholder="enter your username."
          name="username"
          value={credentials.username}
          onChange={onchange}
        />
        <label>email.</label>
        <input
          type="text"
          placeholder="enter your email."
          name="email"
          value={credentials.email}
          onChange={onchange}
        />

        <label>password.</label>
        <input
          type="password"
          placeholder="enter your password."
          name="password"
          value={credentials.password}
          onChange={onchange}
        />

        <div className="register-signup-btns">
          <button className="ls-btn register-btn">register.</button>
          <button className="ls-btn login-in-btn" type="submit">
            <Link className="link" to="/login">
              {" "}
              login in.{" "}
            </Link>
          </button>
        </div>

        {error && (
          <span style={{ marginTop: "20px" }}>Somthing went wrong!</span>
        )}
      </form>
    </div>
  );
};

export default Register;
