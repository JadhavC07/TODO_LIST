import React from "react";

const TodoInput = ({ inputValue, setInputValue }:any) => {
  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };
   const placeHoldertext = "Add your Todo task.................❓";

  return (
    <>
      <textarea
        className="form-control my-3"
        id="exampleFormControlTextarea1"
        rows={3}
        placeholder={placeHoldertext}
        value={inputValue}
        onChange={handleInput}
      />
    </>
  );
};

export default TodoInput;
