import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="fixed-top navbar-light bg-light">
      <Container>
        <Navbar.Brand href="() => false">JD</Navbar.Brand>
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
