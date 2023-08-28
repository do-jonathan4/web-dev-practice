import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <h2 className="header">About</h2>
      <p>Version 1.0.0</p>
      <div style={{ marginTop: "30px" }}>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default About;
