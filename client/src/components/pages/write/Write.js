import React, { useState } from "react";
import "./write.css";
import axios from "axios";
// import { Context } from "../../../context/login Context/Context";

import "../../../responsive/write-responsive.css";

const Write = () => {
  // const { user } = useContext(Context);
  const [postContent, setPostContent] = useState({
    title: "",
    desc: "",
    category: "",
  });
  const [file, setFile] = useState(null);

  const [writeerror, setWriteerror] = useState(false);

  // HANDLE PUBLISH POST
  const handlePublishPost = async (e) => {
    e.preventDefault();

    const newPost = {
      title: postContent.title,
      desc: postContent.desc,
      categories: postContent.category,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        console.error(error.message);
      }
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/createpost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify(newPost),
        }
      );
      const res = await response.json();

      window.location.replace("/post/" + res._id);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onchange = (e) => {
    setPostContent({ ...postContent, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="write-form" onSubmit={handlePublishPost}>
        {writeerror && (
          <div className="write-error-message">
            title and descripton cannot be empty.
          </div>
        )}

        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            name="file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            name="title"
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
            onChange={onchange}
          />
          <input
            name="category"
            type="text"
            placeholder="Category"
            className="write-cat write-input "
            onChange={onchange}
          />
        </div>
        {file && (
          <img
            className="write-img"
            src={URL.createObjectURL(file)}
            alt="write-img"
          />
        )}
        <div className="write-form-group-content">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
            name="desc"
            onChange={onchange}
          ></textarea>
          {postContent.title && postContent.desc ? (
            <button className="write-submit" type="submit">
              Publish
            </button>
          ) : (
            <button
              className="disable-btn"
              onClick={() => {
                setWriteerror(true);
              }}
            >
              Publish
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Write;
