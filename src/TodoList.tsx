import { useState } from "react";
import "./Todo.css";

const TodoList: any = () => {
  const [task, setTask] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");


  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };

  const inputEmpty = <span> Tast is Empty, write something</span>;
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return { inputEmpty };
    }
    setTask([...task, inputValue]);
    setInputValue("");
  };

  const todoListMap = task.map((todo, index) => <li key={index}>{todo}</li>);

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
        <button
          type="button"
          className="btn btn-primary my-2 right"
          onClick={handleAddTodo}
        >
          Add TODO
        </button>
        <ol>
          {todoListMap}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
