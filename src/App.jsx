import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/todo/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
