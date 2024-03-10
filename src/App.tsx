import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container mx-auto px-4 lg:px-60">
      <h1 className="text-2xl font-bold text-center my-5">To-Do App</h1>
      <Navbar />
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
