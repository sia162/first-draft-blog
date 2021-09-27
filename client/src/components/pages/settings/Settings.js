import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";
import ppimg from "./profile.jpg";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">update your account.</span>
          <span className="settings-delete-title">delete your account.</span>
        </div>

        <form className="settings-form">
          <label htmlFor="">profile picture.</label>
          <div className="settings-pp">
            <img src={ppimg} alt="" />
            <label htmlFor="file-input">
              <i className=" settings-pp-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>

          <label>username.</label>
          <input type="text" placeholder="Safar" />
          <label>email.</label>
          <input type="email" placeholder="safar@gmail.com" />
          <label>password.</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
