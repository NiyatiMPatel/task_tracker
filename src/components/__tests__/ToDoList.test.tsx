import { http, HttpResponse } from "msw";
import { server } from "../__mocks__/node";
import { renderWithClient } from "./utils";
import { BrowserRouter } from "react-router-dom";
import ToDoList from "../ToDoList";
import { baseUrl } from "../../utils/axios-interceptors";
import listMock from "../__mocks__/listMock.json";
import { waitFor } from "@testing-library/react";

describe("Should render ToDoList component", () => {
  test("Should show heading", async () => {
    //RENDER
    const result = renderWithClient(
      <BrowserRouter>
        <ToDoList />
      </BrowserRouter>
    );
    // QUERY
    const heading = await result.getByRole("heading", { name: "To-Do List" });
    // ASSERTION
    expect(heading).toBeInTheDocument();
  });

  test("Should show loading", async () => {
    // RENDER
    const result = renderWithClient(
      <BrowserRouter>
        <ToDoList />
      </BrowserRouter>
    );
    // QUERY
    const loading = await result.getByText(/loading/i);
    // ASSERTION
    expect(loading).toBeInTheDocument();
  });

  test("Should show error", async () => {
    server.use(
      http.get("/todos", ({ request }) => {
        console.log("http.get ~ request:", request.method, request.url);
        return new HttpResponse(null, { status: 500 });
      })
    );
    // RENDER
    const result = renderWithClient(
      <BrowserRouter>
        <ToDoList />
      </BrowserRouter>
    );
    // QUERY
    const error = await result.findByText(/error fetching all todos/i);
    // ASSERTION
    expect(error).toBeInTheDocument();
  });

  test("Should show data", async () => {
    // RENDER
    const result = renderWithClient(
      <BrowserRouter>
        <ToDoList />
      </BrowserRouter>
    );

    expect(result.getByText("resume")).toBeVisible();

    //   // QUERY
    //   // const listItems = await result.findAllByTestId("to-do-item");
    //   // console.log("test ~ listItems:", listItems);
    //   // ASSERTION
    //   // expect(listItems.length).toBe(8);
    // });
  });

  // describe("Should update ToDoList component", () => {
  //   test("Should click checkbox", () => {
  //     // RENDER
  //     // QUERY
  //     // ASSERTION
  //   });
  //   test("should click delete button", () => {
  //     // RENDER
  //     // QUERY
  //     // ASSERTION
  //   });
});
