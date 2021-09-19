import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "../styles/experience.scss";

function Experience({ img, title, tech, duration, location, description }) {
  return (
    <div id="experience">
      <br />
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
                  <Card.Title className="text-center exp-title">
                    {title}
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center exp-text">
                    {/* <strong className="body-title-style ">
                    </strong>
                    <br /> */}
                    <strong>Technology:</strong> {tech}
                    <br />
                    <strong>Duration:</strong> {duration}
                    <br />
                    <strong>Location:</strong> {location}
                  </Card.Text>
                  <Card.Text className="description">
                    <strong> Description: </strong>
                    {description}
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
