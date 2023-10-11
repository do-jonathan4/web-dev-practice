import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div id="about" class="bg-light p-5">
      <Container className="p-4">
        <h2 className="text-center pt-2">About Me</h2>
        <Row className="d-md-flex align-items-center">
          <Col className="p-4 mx-auto" md={6}>
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              style={{ width: "300px" }}
              className="rounded mx-auto d-block"
              alt="User Portrait"
            />
          </Col>
          <Col className="p-4" md={6}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              rem nam alias quo labore aliquam aut cum. Eaque, soluta. In!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              rem nam alias quo labore aliquam aut cum. Eaque, soluta. In!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              rem nam alias quo labore aliquam aut cum. Eaque, soluta. In!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              rem nam alias quo labore aliquam aut cum. Eaque, soluta. In!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
