import React from "react";
import "./write.css";
import writeimg from "./p1.jpg";

const Write = () => {
  return (
    <div>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <img className="write-img" src={writeimg} alt="write-img" />

        <div className="write-form-group-content">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
          ></textarea>
          <button className="write-submit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default Write;
