import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function AppCard(props) {
  return (
    <Card style={{ width: "16rem" }} className="mt-2">
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text
          className="overflow-auto d-none d-md-flex"
          style={{ height: "6rem" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere iure
          aperiam et quisquam molestiae magnam maxime at quia eius vero nobis
          dolore maiores exercitationem, sed quod, amet natus unde blanditiis?
        </Card.Text>
        <Container>
          <Row>
            <Col className="d-grid gap-1">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faLink} />
              </Button>
            </Col>
            <Col className="d-grid gap-1">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default AppCard;
