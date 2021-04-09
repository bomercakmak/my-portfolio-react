import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import hereMood from "../img/experience/Here.png";
import "../styles/experience.scss";

  function Experience({img,title,tech,duration,location,description}) {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3"></h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 10 }}>
            <Card className="experience-card">
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={img}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                  {title}
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">
                    
                    </strong>
                    <br /> */}
                    <strong>Technology:</strong> Wordpress, Shopify, BigCommerce, Adobe Photoshop, Adobe Premiere Pro, DaVinci Resolve and Microsoft Office 365
                    <br />
                    <strong>Duration:</strong> August 2018 - June 2019
                    <br />
                    <strong>Location:</strong> Cologne / Germany
                    <br />
                    <p className="description">
                      {" "}
                       <strong> Description: </strong>
                      Designed and executed global social media selling strategy
                      across 125,000 followers on Store's Website, Amazon, Ebay,
                      Etsy, Instagram, and Facebook. Regularly used technologies
                      to sell product on store website; Wordpress, Shopify,
                      BigCommerce, Google Analytics, Semrush and GoDaddy.
                      Technologies used regularly to create social media posts,
                      videos and blogs: Adobe Photoshop, Adobe Premiere Pro,
                      Final Cut Pro, DaVinci Resolve, Microsoft Office 365 and
                      Canva.
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Experience;
