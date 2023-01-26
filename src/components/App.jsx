import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";
import Navigation from "./Navigation";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Propic from "./images/IMG_0695.jpg";
import Propic2 from "./images/propic2.JPG";
import Propic3 from "./images/propic3.JPG";
import Projcover from "./Projcover";
import Geauxlogo from "./images/geauxlogo.png";
import Wyzantlogo from "./images/wyzant2.png";
import Codingcat from "./images/giphy.gif";
import Contact from "./Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faPersonChalkboard);

function App() {
  return (
    <div className="App">
      <section id="navigation">
        <Navigation />
      </section>
      <section id="home">
        <div className="cover-page">
          <Container className="cover-text">
            <Row>
              <Col className="cover-col">
                <Typewriter
                  className="typewriter-effect"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hola")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("你好")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Hi, I'm Kelvin")
                      .start();
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col className="cover-col">
                <h3>scroll down to learn about me!</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="about">
        <div className="about-page">
          <h1>So, Who am I?</h1>
          <Container className="about-container">
            <Row>
              <Col xs={12} md={6}>
                <Carousel fade controls={false}>
                  <Carousel.Item>
                    <img
                      className="d-block mx-auto w-50"
                      src={Propic}
                      alt="A picture of me!"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block mx-auto w-50"
                      src={Propic2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block mx-auto w-50"
                      src={Propic3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col xs={12} md={6} className="about-desc-col">
                <Container>
                  <br />
                  <Row className="about-desc-row">
                    <Col xs={12} md={6}>
                      <p>Name: Kelvin Z Xiao</p>
                    </Col>
                    <Col xs={12} md={6}>
                      <p>Hobbies: Lifting, Reading</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <p>Occupation: Developer</p>
                    </Col>
                    <Col xs={12} md={6}>
                      <p>Favorite Food: Hotpot</p>
                    </Col>
                  </Row>
                </Container>

                <p>
                  I am an undergraduate at New York University double majoring
                  in mathematics and economics. On the side, I am always
                  practicing my web development skills. I am currently a full
                  stack engineer for The Geaux Network. I hope to one day use my
                  skills to make a meaningful contribution to society.
                </p>
                <p>
                  In my free time you can find me deep in a good book, at the
                  gym lifting weights, or learning more about the world we live
                  in. I think it is important that we are passionate about
                  things outside of work!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="projects">
        <div className="projects-page">
          <h1>So, what have I done?</h1>
          <Projcover
            destination="https://geaux.tv/"
            img={Geauxlogo}
            header="Full-stack Engineer @ The Geaux Network"
            desc="A streaming service focused on bringing out the voices of cultures you don't usually see in mainstream media. "
          />
          <Projcover
            destination="https://www.wyzant.com/Tutors/Kelvin0510"
            img={Wyzantlogo}
            header="Wyzant"
            desc="I am a private tutor specializing in test-prep. I love helping others succeed!"
          />
          <Projcover
            img={Codingcat}
            header="Freelance Work"
            desc="I design and engineer websites and applications. Creating tools for others to use is only a part of what I do and love."
          />
        </div>
      </section>
      <section id="contact">
        <div className="contact-me">
          <h1>So, would you like to get in touch?</h1>
          <Contact />
        </div>
      </section>
      <section id="footer">
        <div className="footer">
          <a href="https://github.com/kelvinxiao01" target="_blank">
            <FontAwesomeIcon className="icon" icon="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/kelvin-xiao-a5a473179/"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon="fa-brands fa-linkedin" />
          </a>
          <a href="https://www.instagram.com/_kelvzx/" target="_blank">
            <FontAwesomeIcon className="icon" icon="fa-brands fa-instagram" />
          </a>
          <a href="https://www.wyzant.com/Tutors/Kelvin0510">
            <FontAwesomeIcon
              className="icon"
              icon="fa-solid fa-person-chalkboard"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
