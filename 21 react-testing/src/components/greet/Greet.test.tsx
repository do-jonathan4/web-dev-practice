import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

/**
 * Greet should render text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

test("Greet renders correctly", () => {
  render(<Greet />);
  const text = screen.getByText(/hEllO/i);
  expect(text).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Joe" />);
  const text = screen.getByText(/hEllO Joe/i);
  expect(text).toBeInTheDocument();
});
