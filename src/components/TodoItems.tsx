import React from "react";
import "./TodoItems.css";

const TodoItems = ({ task }: any) => {
  const todolistMap = task.map((todo: string, index: number): any => {
    return (
      <li key={index} className="todolistclass">
        {todo}
      </li>
    );
  });

  return (
    <>
      <ol>{todolistMap}</ol>
    </>
  );
};

export default TodoItems;
