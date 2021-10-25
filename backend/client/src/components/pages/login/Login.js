import { axiosInstance } from "../../../config";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/login Context/Context";
import "./login.css";

import "../../../responsive/login-responsive.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // console.log(res.data);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.user,
        authtoken: res.data.authtoken,
      });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="login-title">login here.</div>
      <form className="login-form" onSubmit={handleLogin}>
        <label>username.</label>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="enter your username."
          ref={userRef}
        />

        <label>password.</label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="enter your password."
          ref={passwordRef}
        />

        <div className="login-signup-btns">
          <button
            className="ls-btn login-btn"
            type="submit"
            disabled={isFetching}
          >
            login.
          </button>
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
