import { useSearchParams } from "react-router-dom";
import { fetchTodos } from "../utils/api";
import ToDoItem from "./ToDoItem";
import ErrorBlock from "./ErrorBlock";
import useQueryData from "../hooks/useQueryData";

const ToDoList = () => {
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");

  const { data, isLoading, isSuccess, isError, error } = useQueryData(
    ["todos"],
    (): Promise<ResponseData> => fetchTodos()
  );

  // console.log("ToDoList ~ data:", data?.data);

  let todos;
  let content;
  if (isSuccess && Array.isArray(data?.data)) {
    todos = data?.data;

    if (todosData === "active") {
      todos = data?.data?.filter((todo: Todo) => todo.status === false);
    }

    if (todosData === "completed") {
      todos = data?.data?.filter((todo: Todo) => todo.status === true);
    }

    content = (
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo._id} data-testid="to-do-item">
            <ToDoItem _id={todo._id} task={todo.task} status={todo.status} />
          </li>
        ))}
      </ul>
    );
  }

  if (isLoading) {
    content = "Loading...";
  }

  if (isError) {
    content = (
      <ErrorBlock
        message={
          error?.message || "Failed to fetch tasks. Please try again later."
        }
      />
    );
  }

  return (
    <>
      <h4 className="text-base font-bold text-center mb-5">To-Do List</h4>
      {content}
    </>
  );
};

export default ToDoList;
