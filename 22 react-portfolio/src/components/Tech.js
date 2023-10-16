import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faNodeJs,
  faReact,
  faBootstrap,
  faNpm,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal, faDatabase } from "@fortawesome/free-solid-svg-icons";

function Tech() {
  return (
    <div id="tech" className="bg-secondary text-white p-5">
      <Container className="p-4 text-center">
        <h2 className="text-center pt-3">Technologies</h2>
        <Container className="p-4 fs-5">
          <ul className="list-unstyled">
            <li>
              <span className="lead">Programing Languages: </span>
              JavaScript, ES6+, Node, Express, PostgreSQL, React, Redux
            </li>
            <li>
              <span className="lead">Tools/Technologies: </span>
              Git, GitHub, Bootstrap, CLI, OOP, HTTP, AJAX, Axios, APIs, Webpack
            </li>
          </ul>
        </Container>
        <div className="p-4">
          <FontAwesomeIcon className="px-2" icon={faJs} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faNodeJs} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faReact} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faTerminal} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faDatabase} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faBootstrap} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faNpm} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faGit} size="xl" />
          <FontAwesomeIcon className="px-2" icon={faGithub} size="xl" />
        </div>
      </Container>
    </div>
  );
}

export default Tech;
