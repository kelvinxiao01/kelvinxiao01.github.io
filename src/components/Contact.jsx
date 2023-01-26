import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import Messagesent from "./images/messagesent.gif";
import Cloud from "./images/cloud.gif";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bs2nf1g",
        "template_dswezwf",
        form.current,
        "kPFZJWFC-4CYhVOFq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSent(true);
    e.target.reset();
  };
  console.log(sent);

  return (
    <div className="contact-form">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name Please..."
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email Please..."
              />

              <textarea
                name="message"
                placeholder="Write your message here..."
              />
              <input type="submit" value="Send" className="submit-button" />
            </form>
          </Col>
          <Col xs={12} md={6}>
            {sent ? (
              <img src={Cloud} alt="Thanks!" />
            ) : (
              <img src={Messagesent} alt="picture of mail" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
