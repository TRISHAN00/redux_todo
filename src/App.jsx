import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar/>
      <TodoList/>
    </div>
  );
}

export default App;
