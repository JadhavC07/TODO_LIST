import React from "react";

const TodoCount = ({ count, setCount }: any) => {
  const countFunction = () => {
    setCount(count + 1);
    console.log("hello count me");
  };

  return (
    <>
      <button type="button" onChange={countFunction}>
        {count}
      </button>
    </>
  );
};

export default TodoCount;
