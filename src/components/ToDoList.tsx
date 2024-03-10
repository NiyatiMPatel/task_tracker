import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../utils/api";
import ToDoItem from "./ToDoItem";
import ErrorBlock from "./ErrorBlock";

const ToDoList = () => {
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: (): Promise<ResponseData> => fetchTodos(),
  });

  let todos;
  let content;
  if (Array.isArray(data?.data)) {
    todos = data?.data;

    if (todosData === "active") {
      todos = data?.data?.filter((todo: Todo) => todo.status === false);
    }

    if (todosData === "completed") {
      todos = data?.data?.filter((todo: Todo) => todo.status === true);
    }

    content = (
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
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
      <h4 className="text-base font-bold text-center mb-5">ToDoList</h4>
      {content}
    </>
  );
};

export default ToDoList;
