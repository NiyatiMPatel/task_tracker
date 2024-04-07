// import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

test("Should render Navbar component", () => {
  //RENDER
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  // QUERY
  const links = screen.getAllByRole("link");
  const all = screen.getByRole("link", { name: "All" });
  // ASSERTION
  expect(links.length).toBe(3);
  expect(all.className).toEqual(expect.stringContaining("text-green-500"));
});

describe("Should have active class when clicked", () => {
  test("When Active is clicked", () => {
    //RENDER
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    // QUERY
    const active = screen.getByRole("link", { name: "Active" });
    fireEvent.click(active);
    // ASSERTION
    expect(active.className).toEqual(expect.stringContaining("text-green-500"));
  });

  test("When Completed is clicked", () => {
    //RENDER
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    // QUERY
    const completed = screen.getByRole("link", { name: "Completed" });
    fireEvent.click(completed);
    // ASSERTION
    expect(completed.className).toEqual(
      expect.stringContaining("text-green-500")
    );
  });
  test("When All is clicked", () => {
    //RENDER
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    // QUERY
    const all = screen.getByRole("link", { name: "All" });
    fireEvent.click(all);
    // ASSERTION
    expect(all.className).toEqual(expect.stringContaining("text-green-500"));
  });
});
