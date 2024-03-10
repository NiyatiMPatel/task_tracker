import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateTodo, deleteTodo } from "../utils/api";
import Modal from "./Modal";
import { queryClient } from "../main";
import ErrorBlock from "./ErrorBlock";

type HandlerInputs = {
  _id: string;
  task: string;
};

const ToDoItem = ({ _id, task, status }: Todo) => {
  const [updateStatus, setUpdateStatus] = useState<boolean>(status);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { mutate: updateMutate, isPending } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      setUpdateStatus(!updateStatus);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const {
    mutate: deleteMutate,
    isPending: deletePending,
    isError,
    error,
  } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  // STATUS UPDATE (CHECK/UNCHECK) HANDLER
  const statusChangeHandler = ({ _id, task }: HandlerInputs) => {
    const payload = {
      _id,
      task,
      status: !updateStatus,
    };
    updateMutate(payload);
  };

  // MODAL OPEN HANDLER
  const openHandler = () => {
    setShowModal(true);
  };

  // MODAL CLOSE HANDLER
  const closeHandler = () => {
    setShowModal(false);
  };

  // DELETE HANDLER
  const deleteHandler = (id: string) => {
    deleteMutate(id);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <h4 className="text-2xl font-bold text-center">
            Are you sure, you want to delete {task}?
          </h4>
          <div className="text-right mt-10">
            <button
              className="mr-12 bg-blue-600 border border-blue-600 rounded-md px-8 py-4 shadow-lg shadow-blue-600/50"
              onClick={() => deleteHandler(_id)}
            >
              {deletePending ? "Deleting" : "Delete"}
            </button>
            <button
              className="bg-slate-50 border border-slate-50 rounded-md px-8 py-4 shadow-lg shadow-slate-500/50"
              onClick={closeHandler}
            >
              Cancel
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
        </Modal>
      )}
      <div className="flex flex-col p-5 my-5 rounded-md bg-slate-50 border border-slate-500 w-full">
        <div className="flex items-center justify-between">
          <div>
            <input
              type="checkbox"
              className="mr-5"
              name="status"
              id={_id}
              checked={updateStatus}
              onChange={() => {
                statusChangeHandler({ _id, task });
              }}
            />
            <label htmlFor={_id}>{task}</label>
          </div>
          {!!updateStatus && (
            <div>
              <button
                type="button"
                className="bg-red-600 border border-red-600 px-8 py-4 rounded-md text-white"
                onClick={openHandler}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        {isPending && <div>Updating...</div>}
      </div>
    </>
  );
};

export default ToDoItem;
