import React from "react";
import Urdisco from "../Assets/urdisco.png";
import Kerraktar from "../Assets/kerraktar.png";
import BauApp from "../Assets/bauapp.png";

const Experience = () => {
  const projectInfoData = [
    {
      image: Urdisco,
      title: "Urdis.co / HSUP",
      text: (
        <div className="work-details-container">
          <p><i>Lead a group of 5 to develop a tour guide app.</i></p><br/>
          <p><b>Experience gained in:</b></p>
          <ul>
            <li>Project management</li>
            <li>React Native</li>
            <li>Kotlin</li>
            <li>Kanban</li>
          </ul>
        </div>
      ),
    },
    {
      image: Kerraktar,
      title: "Kerraktár app",
      text: (
        <div className="work-details-container">
          <p><i>Developed a storage management application for the Hungarian Scouts.</i></p><br/>
          <p><b>Experience gained in:</b></p>
          <ul>
            <li>React Native</li>
            <li>Laravel</li>
            <li>REST APIs</li>
            <li>Git</li>
            <li>Documantation</li>
          </ul>
        </div>
      ),
    },
    {
      image: BauApp,
      title: "BauApp",
      text: (
        <div className="work-details-container">
          <p><i>Developed several versions of BauApp, working together with the dev team in an inustrual setting</i></p><br/>
          <p><b>Experience gained in:</b></p>
          <ul>
            <li>SQL</li>
            <li>Typescript</li>
            <li>Laravel</li>
            <li>REST APIs</li>
            <li>Teamwork</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="work-section-wrapper" id="experience">
      <div className="work-section-top">
        <h1 className="primary-heading">Experience</h1>
        <p className="primary-text">
          Some of my more interesting works and experiences here, but there are many more to come!
        </p>
      </div>
      <div className="work-section-bottom">
        {projectInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="work-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            {data.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
