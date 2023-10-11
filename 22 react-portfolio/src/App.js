import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
