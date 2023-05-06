import TodoInput from "./components/TodoInput";
import TodoCount from "./components/TodoCount";
import { useState } from "react";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [task, setTask] = useState<string[]>([]);

 
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return alert("Input in Empty");
    }
    setTask([...task, inputValue]);
    setInputValue("");
    setCount(count + 1);
  };

  return (
    <>
      <div className="mb-3 container small">
        <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary my-2 right"
            onClick={handleAddTodo}
          >
            Add TODO
          </button>
          <TodoCount count={count} setCount={setCount} />
        </div>
        <TodoItems task={task} />
      </div>
    </>
  );
}

export default App;
