import React from "react";

const TodoCount = ({ count, setCount }: any) => {
 

  return (
    <>
      <button
        type="button"
        className="btn btn-light my-2 border border-primary rounded"
      >
        {count}
      </button>
    </>
  );
};

export default TodoCount;
