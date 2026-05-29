import React, { useState } from "react";
const TimeDate = () => {
  const [timedate, setTimeDate] = useState("");
  setInterval(() => {
    const now = new Date();
    const formatdate = now.toLocaleDateString();
    const formattime = now.toLocaleTimeString();
    setTimeDate(`${formattime}-${formatdate} `);
  }, 1000);
  return (
    <div className=" text-white flex items-center justify-center text-2xl h-6 w-full">
      <h1>
        <span>{timedate}</span>
      </h1>
    </div>
  );
};
export default TimeDate;
