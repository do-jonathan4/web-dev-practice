import { useState, useEffect } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <NavBar userScrolled={scrollTop} />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
