import React, { useState } from "react";
import Listoftasks from "./Listoftasks";
import {
  getDataFromLocalStorage,
  setDataFromLocalStorage,
} from "./LocalStorage";
const Inputs = ({ tasks, settask, inputValue, setinputValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { id, content, checked } = inputValue;
    if (!content) return;
    if (tasks.length >= 5) {
      alert("you can only add 5 tasks");
      return;
    }
    const ifContentMatched=tasks.find((task)=>
    task.content === content);
    if(ifContentMatched)
      alert("already exist");
    if(ifContentMatched)
    return;
    settask((prevTask) => [...prevTask, { id, content, checked }]);
    setinputValue({
      id: "",
      content: "",
      checked: false,
    });
  };
  const handleInput = (value) => {
    setinputValue({ id: value, content: value, checked: false });
  };
  return (
    <div className="mt-1 ml-8 flex items-center flex-col justify-center h-20 w-125">
      <form action="submit" onSubmit={handleSubmit}>
        {/* input section */}
        <input
          type="text"
          placeholder="enter task"
          value={inputValue.content}
          onChange={(event) => {
            handleInput(event.target.value);
          }}
          className="bg-white rounded-l-3xl p-4 text-2xl h-15 w-85"
        />
        {/* add task button */}
        <button className="bg-blue-500 rounded-r-2xl text-2xl h-15 cursor-pointer w-30 hover:bg-blue-700 hover:text-white">
          ADD TASK
        </button>
      </form>
    </div>
  );
};
export default Inputs;