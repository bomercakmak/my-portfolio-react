import React from "react";
import Title from "../Components/Title";
import ExperienceComponent from "../Components/Experience";
import hereMood from "../img/experience/Here.png";
import anyWork from "../img/experience/anywork.png";
import mibgate from "../img/experience/mibgate.png";
function Experience() {
  return (
    <div>
      <div className="title">
        <Title title={"Experience"} span={"Experience"} />
        <ExperienceComponent
          img={mibgate}
          title="Software Engineer Intern"
          tech="HTML5, CSS3, JavaScript, C#, Python, Node.js, React, Redux, Express, MongoDB"
          duration="July 2020 - October 2020"
          location="Düsseldorf, Germany"
          description="Our intern Bahadır Omer Cakmak worked based on Web development. 
          He used recent and industry wide technologies that are popularly used in the software engineering and web development community thoroughly.
           He has expanded his programming skills by working hard daily on real life programming challenges. He has given various speeches at the daily
          meeting, which has improved his public speaking and communication skills. Lastly, Omer has also get involved into the  meetings with customers, in 
          which he has used his extensive public communication skills to understand and deliver the needs of clients. 
          "
        />
        <ExperienceComponent
          img={anyWork}
          title="Software Engineer Intern"
          tech="HTML5, CSS3, JavaScript, C#, ASP.NET"
          duration="July 2019 - October 2019"
          location="Düsseldorf, Germany"
          description="The trainee can achieve to applications development, projects and website development. Trainer can work as a part of a team with cooperation. Trainee can be able to Object Oriented Programming in Java and C#, Applications Development, Front-end Development, Database development. Monitoring international activities and working as a team member to software development and project development.
         "
        />
        <ExperienceComponent
          img={hereMood}
          title="Social Media &amp; E-Commerce Manager"
          tech="Wordpress, Shopify, BigCommerce, Adobe Photoshop, Adobe Premiere Pro, DaVinci Resolve and Microsoft Office 365"
          duration="August 2018 - June 2019"
          location="Cologne, Germany"
          description="Designed and executed global social media selling strategy
          across 125,000 followers on Store's Website, Amazon, Ebay,
          Etsy, Instagram, and Facebook. Regularly used technologies
          to sell product on store website; Wordpress, Shopify,
          BigCommerce, Google Analytics, Semrush and GoDaddy.
          Technologies used regularly to create social media posts,
          videos and blogs: Adobe Photoshop, Adobe Premiere Pro,
          Final Cut Pro, DaVinci Resolve, Microsoft Office 365 and
          Canva."
        />
      </div>
    </div>
  );
}

export default Experience;
