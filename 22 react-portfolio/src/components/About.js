import React from "react";

function About() {
  return (
    <div id="about" class="bg-light p-5">
      <div className="container p-4">
        <h2 className="text-center pt-2">About Me</h2>
        <div className="d-md-flex row align-items-center">
          <div className="p-4 col-md mx-auto">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              style={{ width: "300px" }}
              className="rounded mx-auto d-block"
              alt="User Portrait"
            />
          </div>
          <div className="p-4 col-md">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
