import React from "react";
import { Container } from "react-bootstrap";

function Tech() {
  return (
    <div id="tech" className="bg-secondary text-white p-5">
      <Container className="p-4">
        <h2 className="text-center pt-3">Technologies</h2>
        <Container className="p-4 fs-5">
          <ul className="list-unstyled">
            <li>
              <span className="lead">Programing Languages:</span>
              JavaScript, ES6+, Node, Express, PostgreSQL, React, Redux
            </li>
            <li>
              <span className="lead">Tools/Technologies:</span>
              Git, GitHub, Bootstrap, CLI, OOP, HTTP, AJAX, Axios, APIs, Webpack
            </li>
          </ul>
        </Container>
        <div className="p-4">
          <i className="px-2 fa-brands fa-js fa-lg"></i>
          <i className="px-2 fa-brands fa-node-js fa-lg"></i>
          <i className="px-2 fa-brands fa-react fa-lg"></i>
          <i className="px-2 fa-solid fa-terminal fa-lg"></i>
          <i className="px-2 fa-solid fa-database fa-lg"></i>
          <i className="px-2 fa-brands fa-bootstrap fa-lg"></i>
          <i className="px-2 fa-brands fa-npm fa-lg"></i>
          <i className="px-2 fa-brands fa-git fa-lg"></i>
          <i className="px-2 fa-brands fa-github fa-lg"></i>
        </div>
      </Container>
    </div>
  );
}

export default Tech;
