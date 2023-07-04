import React from "react";
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Contact me!</h1>
      <h1 className="primary-text">I'd be delighted to work with you!</h1>
      <div className="contact-form-container">
        <div className="contact-email-container">
          <p className="upper-contact-text">Email:</p>
          <a href="mailto:szecsenyi.marton+portfolio@gmail.com" className="contact-email">szecsenyi.marton@gmail.com</a>
        </div>
        <div className="contact-email-container">
          <p className="lower-contact-text">Phone: +36 20 441 1768</p>
        </div>
        <div>
          <a href="https://github.com/MSzecsenyi">
          <FaGithubSquare className="contact-icon" size="40" />
          </a>
          <a href="https://www.linkedin.com/in/marton-szecsenyi/">
          <FaLinkedin className="contact-icon" size="40" />
          </a>
        </div>
      </div>
      <div className="footer-container">
        <p className="footer-text">Made by me</p>
      </div>
    </div>
  );
};

export default Contact;
