import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
const Listoftasks = ({ tasks, settask }) => {
  const toggleCheck = (value) => {
    settask((prev) =>
      prev.map((task) =>
        task === value ? { ...task, checked: !task.checked } : task,
      ),
    );
  };
  const handleDelete = (value) => {
    const updatedTasks = tasks.filter((task) => task !== value);
    settask(updatedTasks);
  };

  return (
    <div className="ml-13 mt-2 rounded-3xl flex items-center flex-col justify-center h-102 w-118">
      <ul>
        {tasks.map((task, index) => (
          <li
            className="flex items-center justify-between border-gray-500 border-3 border-dotted h-15 w-100 m-5 rounded-4xl p-3"
            key={task.id}
          >
            <span className="text-4xl text-white pb-2">{task.content}</span>
            <div className="flex items-center justify-center">
              <button
                onClick={() => toggleCheck(task)}
                className="cursor-pointer mr-5 text-green-500 sticky text-3xl"
              >
                {task.checked ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaRegCircle className="text-gray-400" />
                )}
                {/* <FaCheckCircle /> */}
              </button>
              <button
                onClick={() => handleDelete(task)}
                className="cursor-pointer"
              >
                <MdDeleteForever className=" text-red-500 text-4xl" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Listoftasks;
