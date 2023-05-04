import { useState } from "react";
import "./Todo.css";

const TodoList: any = () => {
  const [task, setTask] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return alert("Input in Empty");
    }
    setTask([...task, inputValue]);
    setInputValue("");
    setCount(count + 1);
  };

  const todoListMap = task.map((todo, index) => <li key={index} className="todolistclass"> {todo}</li>);

  return (
    <>
      <div className="mb-3 container small">
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Write your to-do list......"
          value={inputValue}
          onChange={handleInput}
        />
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary my-2 right"
            onClick={handleAddTodo}
          >
            Add TODO
          </button>
          <button type="button" className="btn btn-light my-2 border">
            {count}
          </button>
        </div>
        <ol>{todoListMap}</ol>
      </div>
    </>
  );
};

export default TodoList;
