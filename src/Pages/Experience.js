import React from "react";
import Title from "../Components/Title";
import ExperienceComponent from "../Components/Experience"
import hereMood from "../img/experience/Here.png";
function Experience() {
  return (
    <div>
      <div className="title">
        <Title title={"Experience"} span={"Experience"} />
        <ExperienceComponent img={hereMood} title="Social Media &amp; E-Commerce Manager" />
      </div>
    </div>
  );
}

export default Experience;
