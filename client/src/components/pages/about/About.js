import React, { useState } from "react";
import "./about.css";
import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";
require("dotenv").config();

const About = () => {
  init(process.env.REACT_APP_INIT);

  const [msgsend, setMsgsend] = useState(false);
  const [msgerrorsend, setMsgerrorsend] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();
    sendForm("contact_form", "template_t7aws0g", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setMsgsend(true);
      },
      function (error) {
        console.log("FAILED...", error);
        setMsgerrorsend(true);
      }
    );
  };

  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  return (
    <div>
      <div className="about-section">
        <div className="about-head">
          <div className="about-title">about me</div>
          <div className="about-content">
            this blog is made by me. (siya) <br /> give it a try.
          </div>
        </div>

        <form
          className="about-form"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-title">
            Tell me what you are think, any suggestions?
          </div>
          <input type="hidden" name="contact_number" value={contactNumber} />

          <div className="contact-details-sec">
            <div className="contact-sec">
              name:{" "}
              <input
                className="about-input"
                type="text"
                {...register("user_name", { required: true })}
              />
              email:{" "}
              <input
                className="about-input"
                type="email"
                {...register("user_email", { required: true })}
              />
            </div>
            <div className="write-sec">
              write:
              <textarea
                className="about-input about-message"
                name="message"
                {...register("message", { required: true })}
              ></textarea>
            </div>
          </div>
          <button className="about-form-btn" type="submit">
            send.
          </button>

          {msgsend && (
            <div
              style={{
                marginRight: "29px",
                marginTop: "13px",
                textAlign: "end",
                fontSize: "1.2rem",
                color: "green",
              }}
            >
              your message has been sent!
            </div>
          )}
          {msgerrorsend && (
            <div
              style={{
                marginRight: "29px",
                marginTop: "13px",
                textAlign: "end",
                fontSize: "1.2rem",
                color: "red",
              }}
            >
              your message was not sent!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default About;
