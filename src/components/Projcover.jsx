import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function Projcover(props) {
  return (
    <div className="proj-cover">
      <a href={props.destination}>
        <Container>
          <Row>
            <Col>
              <img
                src={props.img}
                alt="project cover image"
                className="coverpic"
              />
            </Col>
            <Col>
              <h4>{props.header}</h4>
              <p>{props.desc}</p>
            </Col>
          </Row>
        </Container>
      </a>
    </div>
  );
}

export default Projcover;
