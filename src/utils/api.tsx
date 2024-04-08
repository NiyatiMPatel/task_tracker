import { AxiosResponse } from "axios";
import { instance } from "./axios-interceptors";

const baseUrl = process.env.VITE_REACT_APP_API_URL;

// POST TODO
export const createTodo = async (payload: Payload): Promise<ResponseData> => {
  console.log("createTodo ~ payload:", payload);
  try {
    const response: AxiosResponse<ResponseData> = await instance.post(
      "/todos",
      payload
    );
    const data: ResponseData = response?.data;
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Error creating todo");
  }
};

// GET ALL TODOS
export const fetchTodos = async (): Promise<ResponseData> => {
  try {
    const response: AxiosResponse<ResponseData> = await instance.get("/todos");
    const data: ResponseData = response?.data;
    return data;
  } catch (error) {
    // console.error("Error fetching all todos:", error);
    throw new Error("Error fetching all todos");
  }
};

// GET SINGLE TODO
export const fetchTodo = async (id: string): Promise<ResponseData> => {
  try {
    const response: AxiosResponse<ResponseData> = await instance.get(
      `${baseUrl}/todos/${id}`
    );
    const data: ResponseData = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw new Error("Error fetching todo");
  }
};

// UPDATE TODO
export const updateTodo = async (payload: Todo): Promise<ResponseData> => {
  try {
    const response: AxiosResponse<ResponseData> = await instance.put(
      `/todos/${payload._id}`,
      payload
    );
    const data: ResponseData = response.data;
    return data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Error updating todo");
  }
};

// DELETE TODO
export const deleteTodo = async (id: string): Promise<ResponseData> => {
  try {
    const response: AxiosResponse<ResponseData> = await instance.delete(
      `/todos/${id}`
    );
    const data: ResponseData = response.data;
    return data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Error deleting todo");
  }
};
