import React from "react";
import Title from "../Components/Title";
import ExperienceComponent from "../Components/Experience"
function Experience() {
  return (
    <div>
      <div className="title">
        <Title title={"Experience"} span={"Experience"} />
        <ExperienceComponent/>
      </div>
    </div>
  );
}

export default Experience;
