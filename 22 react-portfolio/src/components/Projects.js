import React from "react";
import { Container } from "react-bootstrap";
import AppCard from "./AppCard";

function Projects() {
  const projectData = [
    {
      id: 1,
      img: "https://via.placeholder.com/600/b0f7cc",
      title: "Project 1",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/600/b0f7cc",
      title: "Project 2",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/600/b0f7cc",
      title: "Project 3",
    },
    {
      id: 4,
      img: "https://via.placeholder.com/600/b0f7cc",
      title: "Project 4",
    },
  ];

  return (
    <div id="projects" class="bg-light p-5">
      <Container class="container p-4">
        <h2 class="text-center pt-3">Projects</h2>
        <div
          id="projectContainer"
          class="p-4 d-flex flex-wrap align-items-center justify-content-around"
        >
          {projectData.map((x) => (
            <AppCard key={x.id} data={x} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
