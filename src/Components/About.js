import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Just in a nutshell... who am I?
        </h1>
        <p className="about-text">
        I am a recent graduate from <b>ELTE</b>, Hungary. During my university years, I took part in various projects, including one that secured a national grant (<b>HSUP</b>) and another as a pro bono initiative for the <b>Hungarian Scout Association</b>. Additionally, I gained valuable industrial experience as an <b>Application Engineer</b> at BauApp.
        </p>
        <p className="about-text">
        I'm also a devoted music fan, often found playing my guitar or cello when I'm not working on my laptop. Additionally, I actively lead a scout troop and have played a significant role in training future leaders within the organization.
        </p>
      </div>
    </div>
  );
};

export default About;
