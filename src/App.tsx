import TodoInput from "./components/TodoInput";
import TodoCount from "./components/TodoCount";
import React, { useRef, useState } from "react";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [task, setTask] = useState<string[]>([]);

  let inputEmpty = useRef().current;

const handleInputChange = (event:any) => {
  setInputValue(event.target.value);
};
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return inputStyle;
    }
    setTask([...task, inputValue]);
    setInputValue("");
    setCount(count + 1);
  };
  const inputStyle = {
    border: inputValue.trim() === "" ? "1px solid red" : "1px solid black",
  };
  return (
    <>
      <div className="mb-3 container small">
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          ref={inputEmpty}
          style={inputStyle}
          onChang={handleInputChange}
        />
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
