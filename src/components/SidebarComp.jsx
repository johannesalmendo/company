import React from "react";

const SidebarComp = ({ activeItem, onItemClick }) => {
  return (
    <div className="flex flex-col w-64 bg-gray-200 h-screen">
      <div
        className={`${
          activeItem === 1 ? "bg-purple-900 text-gray-50" : "text-purple-900"
        } p-4 cursor-pointer`}
        onClick={() => onItemClick(1)}
      >
        Menu item 1
      </div>
      <div
        className={`${
          activeItem === 2 ? "bg-purple-900 text-gray-50" : "text-purple-900"
        } p-4 cursor-pointer`}
        onClick={() => onItemClick(2)}
      >
        Menu item 2
      </div>
      <div
        className={`${
          activeItem === 3 ? "bg-purple-900 text-gray-50" : "text-purple-900"
        } p-4 cursor-pointer`}
        onClick={() => onItemClick(3)}
      >
        Menu item 3
      </div>
    </div>
  );
};

export default SidebarComp;
