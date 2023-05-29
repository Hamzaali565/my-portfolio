import React from "react";
const Card = ({ src, projectName, onClick, onMove }) => {
  return (
    <div className="mx-5 mt-2 px-2 mb-2 rounded-2xl border-4 sm:w-64 md:w-72">
      <div className="flex justify-center mt-4 ">
        <img src={src} alt="" className="w-96  h-44 rounded" />
      </div>
      <div className="flex justify-center my-6 font-bold text-[#17191A] text-2xl">
        {projectName}
      </div>
      <div
        className="flex justify-between border rounded p-2 mt-4 my-2 bg-gray-300 hover:bg-gray-200 cursor-pointer transition-colors duration-500"
        onClick={onClick}
      >
        <div className="text-xl text-blue-600 font-bold ">Visit</div>
        <div className="text-xl text-blue-600 font-bold">{">"}</div>
      </div>
      <div
        className="my-3 text-center underline text-blue-600 cursor-pointer"
        onClick={onMove}
      >
        Get Source Code
      </div>
    </div>
  );
};

export default Card;
