import React from "react";
import Avatar from "../avatar/Avatar";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <div>
        <Avatar />
      </div>
      <ul className="hidden lg:flex space-x-8 ">
        <li className="hover:underline cursor-pointer">Projects</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
      <div className="space-y-0.5 lg:hidden">
        <div className="h-1 bg-gray-700 w-6" />
        <div className="h-1 bg-gray-700 w-6" />
        <div className="h-1 bg-gray-700 w-6" />
      </div>
    </div>
  );
};

export default Header;
