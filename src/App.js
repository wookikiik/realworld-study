import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <TodoApp />
      <ToastContainer />
    </div>
  );
}

export default App;
