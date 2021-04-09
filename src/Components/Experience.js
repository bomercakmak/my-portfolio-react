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
                    <strong>Technology:</strong> {tech}
                    <br />
                    <strong>Duration:</strong> {duration}
                    <br />
                    <strong>Location:</strong> {location}
                    <br />
                    <p className="description">
                      {" "}
                       <strong> Description: </strong>
                      {description}
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
