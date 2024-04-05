import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container mx-auto px-4 lg:px-60">
      <Title />
      <Navbar />
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
