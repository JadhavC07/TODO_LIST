import React from "react";

const TodoInput = ({ inputValue, setInputValue }:any) => {
  const handleInput = (event: any) => {
    setInputValue(event.target.value);
    console.log("value", event);
  };

  return (
    <>
      <textarea
        className="form-control my-3"
        id="exampleFormControlTextarea1"
        rows={3}
        placeholder="Write your to-do list......"
        value={inputValue}
        onChange={handleInput}
      />
    </>
  );
};

export default TodoInput;
