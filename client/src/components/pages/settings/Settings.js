import React, { useContext, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";
import { Context } from "../../../context/login Context/Context";
import axios from "axios";

import "../../../responsive/setting-responsive.css";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const PF = "http://localhost:5000/images/";
  const [userUpdatedCreds, setUserUpdatedCreds] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [crederror, setError] = useState(false);

  const [successProfileUpdate, setsuccessProfileUpdate] = useState(false);

  // HANDLE SETTINGS UPDATE
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      username: userUpdatedCreds.username,
      email: userUpdatedCreds.email,
      password: userUpdatedCreds.password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        console.error(error.message);
      }
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/updateuser/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify(updatedUser),
        }
      );
      const res = await response.json();
      setsuccessProfileUpdate(true);

      setError(false);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
      console.error(error.message);
      setError(true);
    }
  };

  //HANDLE DELETE ACCOUNT

  const handleDeleteAccount = async () => {
    let deleteacc = window.confirm(
      "Are you sure you want to delete your account?"
    );
    console.log(deleteacc);

    if (deleteacc) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/deleteuser/${user._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );
        const res = await response.json();
        console.log(res);
        dispatch({ type: "LOGOUT" });
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  // VALUE CHANGES
  const onchange = (e) => {
    setUserUpdatedCreds({
      ...userUpdatedCreds,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">update your account.</span>
          <span className="settings-delete-title" onClick={handleDeleteAccount}>
            delete your account.
          </span>
        </div>

        <form className="settings-form" onSubmit={handleUpdateProfile}>
          <label htmlFor="">profile picture.</label>
          <div className="settings-pp">
            {user.profilePic ? (
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt="profile"
              />
            ) : (
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                }
                alt="none"
              />
            )}

            <label htmlFor="file-input">
              <i className=" settings-pp-icon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>username.</label>
          <input
            type="text"
            placeholder={user.username}
            name="username"
            onChange={onchange}
          />
          {crederror && (
            <div style={{ color: "red" }}>fill unique credentials.</div>
          )}
          <label>email.</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={onchange}
          />
          {crederror && (
            <div style={{ color: "red" }}>fill unique credentials.</div>
          )}
          <label>password.</label>
          <input type="password" name="password" onChange={onchange} />

          {userUpdatedCreds.username &&
          userUpdatedCreds.email &&
          userUpdatedCreds.password ? (
            <button className="settings-submit" type="submit">
              Update
            </button>
          ) : (
            <button disabled className="settings-disable-btn">
              Fill All Fields
            </button>
          )}

          {successProfileUpdate && (
            <span style={{ color: "green", textAlign: "center" }}>
              Profile Updated Successfully
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
