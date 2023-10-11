import React from "react";

function Tech() {
  return (
    <div id="tech" class="bg-secondary text-white p-5">
      <div class="container p-4">
        <h2 class="text-center pt-3">Technologies</h2>
        <div class="container p-4 fs-5">
          <ul class="list-unstyled">
            <li>
              <span class="lead">Programing Languages:</span>
              JavaScript, ES6+, Node, Express, PostgreSQL, React, Redux
            </li>
            <li>
              <span class="lead">Tools/Technologies:</span>
              Git, GitHub, Bootstrap, CLI, OOP, HTTP, AJAX, Axios, APIs, Webpack
            </li>
          </ul>
        </div>
        <div class="p-4">
          <i class="px-2 fa-brands fa-js fa-lg"></i>
          <i class="px-2 fa-brands fa-node-js fa-lg"></i>
          <i class="px-2 fa-brands fa-react fa-lg"></i>
          <i class="px-2 fa-solid fa-terminal fa-lg"></i>
          <i class="px-2 fa-solid fa-database fa-lg"></i>
          <i class="px-2 fa-brands fa-bootstrap fa-lg"></i>
          <i class="px-2 fa-brands fa-npm fa-lg"></i>
          <i class="px-2 fa-brands fa-git fa-lg"></i>
          <i class="px-2 fa-brands fa-github fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default Tech;
