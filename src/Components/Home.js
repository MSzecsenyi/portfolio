import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = (handleNavigation) => {
  return (
    <div className="home-container" id="home">
      <Navbar handleNavigation={handleNavigation} />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Let's build awesome things together!
          </h1>
          <p className="primary-text">
            Hali! I'm Márton, an enthusiastic programmer. I'm always looking for opportunities to develop my skills, or put them to good use!
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
