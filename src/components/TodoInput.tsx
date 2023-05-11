import React from "react";

const TodoInput = ({ inputValue, setInputValue }: any) => {
  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };
  let placeHoldertext = "Add your Todo task.................Next.❓";
  

  return (
    <>
      <textarea
        className="form-control my-3 border-primary"
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
