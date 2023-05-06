import React from "react";

const TodoItems = ({ task }: any) => {
  const todolistMap = task.map((todo: string, index: number): any => {
    return <li key={index}>{todo}</li>;
  });

  return (
    <>
      <ol>{todolistMap}</ol>
    </>
  );
};

export default TodoItems;
