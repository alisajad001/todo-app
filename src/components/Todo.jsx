import React, { useContext } from "react";
import { AppContext } from "../App";
import { FaCircleCheck, FaCircleNotch } from "react-icons/fa6";

const Todo = ({ todoItem }) => {
  const { completeTodo } = useContext(AppContext);
  return (
    <div
      className={
        todoItem.completed
          ? "flex justify-between items-center p-3 py-5 bg-green-200 border border-green-400 shadow-md rounded-md"
          : "flex justify-between items-center p-3 py-5 bg-blue-100 shadow-md rounded-md"
      }
    >
      <h3 className="text-gray-700">{todoItem.name}</h3>

      <button onClick={() => completeTodo(todoItem)}>
        {todoItem.completed ? (
          <FaCircleCheck className="text-green-400 text-2xl font-bold" />
        ) : (
          <FaCircleNotch className="text-blue-400 text-2xl font-bold" />
        )}
      </button>
    </div>
  );
};

export default Todo;
