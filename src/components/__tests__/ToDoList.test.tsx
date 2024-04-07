import { renderWithClient } from "./utils";
import { BrowserRouter } from "react-router-dom";
import ToDoList from "../ToDoList";

test("Should render ToDoList component", async () => {
  //RENDER
  const result = renderWithClient(
    <BrowserRouter>
      <ToDoList />
    </BrowserRouter>
  );
  // QUERY
  const heading = result.getByRole("heading", { name: "ToDoList" });
  // ASSERTION
  expect(await heading).toBeInTheDocument();
});
