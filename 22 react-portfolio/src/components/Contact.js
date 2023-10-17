import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router";

function Contact() {
  return (
    <div id="contact" class="bg-secondary text-white p-5">
      <div class="container p-4">
        <h2 class="text-center pt-2">Contact</h2>
        <p class="lead text-center">Want to reach out? Find me here:</p>
        <div class="container p-4 d-flex flex-wrap align-items-center justify-content-center">
          <a href="() => false" class="btn btn-secondary btn-lg mx-2">
            <i class="fa-solid fa-envelope fa-lg"></i>
            <span class="tooltiptext">Email</span>
          </a>
          <a href="() => false" class="btn btn-secondary btn-lg mx-2">
            <i class="fa-brands fa-github fa-lg"></i>
            <span class="tooltiptext">GitHub</span>
          </a>
          <a href="() => false" class="btn btn-secondary btn-lg mx-2">
            <i class="fa-solid fa-file fa-lg"></i>
            <span class="tooltiptext">Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
