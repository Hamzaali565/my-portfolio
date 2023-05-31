import React from "react";

const Icons = ({ iconName, content, action }) => {
  return (
    <div className="space-x-2 flex justify-center mt-2 items-center">
      <iconName className="inline text-3xl" />
      <a href="mailto" className="text-blue-500 underline cursor-pointer">
        alimuhammadhamza402@gmail.com
      </a>
    </div>
  );
};

export default Icons;
