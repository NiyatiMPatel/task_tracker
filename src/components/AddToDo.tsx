import { useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "../utils/api";
import ErrorBlock from "./ErrorBlock";
import { queryClient } from "../main";

const AddToDo = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      setInputValue("");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.values(Object.fromEntries(formData)).toString();
    const payload: Payload = {
      task: data.trim(),
      status: false,
    };
    !!data.trim() && mutate(payload);
  };

  return (
    <div className="my-5">
      <form onSubmit={submitHandler}>
        <div className="flex flex-wrap gap-4 md:gap-0 items-center justify-between">
          <input
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-full sm:w-4/5 rounded-md sm:text-sm focus:ring-1"
            placeholder="Add To-Do Task"
            type="text"
            id="add-todo"
            name="add-todo"
            value={inputValue}
            onChange={inputChangeHandler}
          />
          <button
            type="submit"
            className="py-2 border border-slate-300 w-full sm:w-1/6 rounded-md"
          >
            {isPending ? "Adding" : "Add"}
          </button>
        </div>
        {isError && (
          <ErrorBlock
            message={
              error?.message ||
              "Failed to add task. Please check your inputs and try again later."
            }
          />
        )}
      </form>
    </div>
  );
};

export default AddToDo;
