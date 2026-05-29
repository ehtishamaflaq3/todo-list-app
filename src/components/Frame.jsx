import React from "react";
import Headingpanel from "./Headingpanel";
import TimeDate from "./TimeDate";
import Inputs from "./Inputs";
import { useState } from "react";
import Listoftasks from "./Listoftasks";
import { getDataFromLocalStorage } from "./LocalStorage";
const Frame = () => {
  const [tasks, settasks] = useState(()=>getDataFromLocalStorage());
  const [inputValue, setinputValue] = useState({
    id: "",
    content: "",
    checked: false,
  });
  return (
    <div className="bg-gray-700 h-145 rounded-4xl flex flex-col w-140">
      <Headingpanel />
      <TimeDate />
      <Inputs
        tasks={tasks}
        settask={settasks}
        inputValue={inputValue}
        setinputValue={setinputValue}
      />
      <Listoftasks 
      tasks={tasks}
      settask={settasks}/>
    </div>
  );
};
export default Frame;