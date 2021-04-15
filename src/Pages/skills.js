import React from "react";
import { Card, CardDeck, Image, Row, Col } from "react-bootstrap";
import { skills } from "./skills-data";

import "../styles/skills.scss";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      {/* <h1 className="text-center font-details-b pb-4">
        Software Engineering Skills
      </h1> */}
      <CardDeck className="d-flex justify-content-around">
        <Row className="d-flex ">
          {/* Frontend */}
          <Col xl={4} className="col-content">
            <Card className="card focus mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center white card-title">
                  Frontend Development
                </Card.Title>
                <hr />
                <Card.Text className="card-text  white d-flex justify-content-start flex-column">
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-white tech-name text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            
          </Col>

          {/* Backend */}
          <Col className="col" xl={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center white  card-title">
                  Backend Development
                </Card.Title>
                <hr />
                <Card.Text className="card-text white d-flex justify-content-start flex-column">
                  {skills.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-white tech-name text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center white card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-white tech-name text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Version Control */}

            

            {/* Dsing */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center white card-title">
                  Graphic Design
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.graphicDesign.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-white tech-name text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col xl={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center white card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.programmingLanguages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-white tech-name text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center white card-title">
                  Version Control
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a
                      className="text-white tech-name text-decoration-none"
                      href={skills.versionControl[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skills.versionControl[0].imgSrc}
                        alt={skills.versionControl[0].imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skills.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Ecommerce */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center white card-title">
                  E-Commerce
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.ecommerce.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-white tech-name text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
