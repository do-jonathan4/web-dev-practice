import { render, screen } from "@testing-library/react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

describe("Navbar", () => {
  test("renders About tab", () => {
    render(<NavBar />);
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Tech tab", () => {
    render(<NavBar />);
    const linkElement = screen.getByText(/technologies/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Project tab", () => {
    render(<NavBar />);
    const linkElement = screen.getByText(/projects/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Contact tab", () => {
    render(<NavBar />);
    const linkElement = screen.getByText(/contact/i);
    expect(linkElement).toBeInTheDocument();
  });
});

test("About renders profile picture", () => {
  render(<About />);
  const linkElement = screen.getByRole("img", {
    name: /user portrait/i,
  });
  expect(linkElement).toBeInTheDocument();
});

test("Tech renders list", () => {
  render(<Tech />);
  const linkElements = screen.getByRole("list");
  expect(linkElements).toBeInTheDocument();
});

test("Project cards have title", () => {
  render(<Projects />);
  const linkElement = screen.getByText(/project 1/i);
  expect(linkElement).toBeInTheDocument();
});

test("Contact section should have email", () => {
  render(<Contact />);
  const linkElement = screen.getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});
