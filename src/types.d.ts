type Todo = {
  _id: string;
  task: string;
  status: boolean;
};

type Todos = {
  todos: Todo[];
};

type Payload = {
  task: string;
  status: boolean;
};

type ResponseData = {
  data: Todos | Todo;
  message: string;
};

type ErrorBlockProps = {
  message: string;
};
