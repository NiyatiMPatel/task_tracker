import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ToDoList from "./components/ToDoList";

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24, //24HoursInMs,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container mx-auto px-4 lg:px-60">
          <Title />
          <Navbar />
          <AddToDo />
          <ToDoList />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
