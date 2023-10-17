import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

function NavBar({ userScrolled }) {
  const top = Boolean(userScrolled)
    ? "navbar-dark bg-dark"
    : "navbar-light bg-light";

  return (
    <Navbar expand="lg" className={`fixed-top ${top}`}>
      <Container>
        <Navbar.Brand href="/">JD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-center justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#tech">Technologies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
