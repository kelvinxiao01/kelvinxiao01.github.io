import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./App.css";

function Navigation() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-top ${isSticky ? "sticky" : ""}`}>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="nav-item">
            Kelvin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="nav-item">
                About
              </Nav.Link>
              <Nav.Link href="#projects" className="nav-item">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-item">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
