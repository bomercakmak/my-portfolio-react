import React from "react";
import Title from "../Components/Title";
import ExperienceComponent from "../Components/Experience";
import hereMood from "../img/experience/Here.png";
function Experience() {
  return (
    <div>
      <div className="title">
        <Title title={"Experience"} span={"Experience"} />
        <ExperienceComponent
          img={hereMood}
          title="Social Media &amp; E-Commerce Manager"
          tech="Wordpress, Shopify, BigCommerce, Adobe Photoshop, Adobe Premiere Pro, DaVinci Resolve and Microsoft Office 365"
          duration="August 2018 - June 2019"
          location="Cologne / Germany"
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
        <ExperienceComponent
          img={hereMood}
          title="Social Media &amp; E-Commerce Manager"
          tech="Wordpress, Shopify, BigCommerce, Adobe Photoshop, Adobe Premiere Pro, DaVinci Resolve and Microsoft Office 365"
          duration="August 2018 - June 2019"
          location="Cologne / Germany"
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
        <ExperienceComponent
          img={hereMood}
          title="Social Media &amp; E-Commerce Manager"
          tech="Wordpress, Shopify, BigCommerce, Adobe Photoshop, Adobe Premiere Pro, DaVinci Resolve and Microsoft Office 365"
          duration="August 2018 - June 2019"
          location="Cologne / Germany"
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
