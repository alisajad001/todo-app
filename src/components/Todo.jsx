import React from "react";
import { FaCircleCheck, FaCircleNotch } from "react-icons/fa6";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between items-center p-3 py-5 bg-blue-100 shadow-md rounded-md">
      <h3 className="text-gray-700">{todo.name}</h3>
      <button>
        <FaCircleNotch className="text-blue-400 text-xl font-bold" />
      </button>
    </div>
  );
};

export default Todo;
