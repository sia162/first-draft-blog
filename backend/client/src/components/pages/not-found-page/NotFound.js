import React from "react";
import notfound from "./Ghost-big.png";
import "./notfound.css";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  let history = useHistory();

  const goback = () => {
    history.push("/");
  };

  return (
    <div className="not-found-box">
      <div className="not-found">
        <img src={notfound} alt="not found" />
        <div className="not-found-title">
          This Page is a Ghost Go Back This Post Does Not Exist
        </div>
        <div className="not-found-para">
          Once alive and now dead, this ghost appears to have some unfinished
          business. Could it be with you? Or the treasure hidden under the
          floorboards of the old mansion in the hills that may never reach its
          rightful owner, a compassionate school teacher in Brooklyn.
        </div>

        <button className="not-found-back-btn" onClick={goback}>
          Go To Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
