import React from "react";
import { Container } from "react-bootstrap";

function Projects() {
  const projectData = [
    { id: 1, img: null, title: "Project 1" },
    { id: 2, img: null, title: "Project 1" },
    { id: 3, img: null, title: "Project 1" },
    { id: 4, img: null, title: "Project 1" },
  ];
  return (
    <div id="projects" class="bg-light p-5">
      <Container class="container p-4">
        <h2 class="text-center pt-3">Projects</h2>
        <div
          id="projectContainer"
          class="p-4 d-flex flex-wrap align-items-center justify-content-around"
        ></div>
      </Container>
    </div>
  );
}

export default Projects;
