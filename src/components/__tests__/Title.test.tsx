// import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "../Title";

test("Should render Title component", () => {
  // RENDER COMPONENT ON JSDOM
  render(<Title />);
  // QUERY
  const heading = screen.getByRole("heading", { name: "To-Do App" });
  // ASSERTION
  expect(heading).toBeInTheDocument();
});
