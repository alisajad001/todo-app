import React, { useContext } from "react";
import { AppContext } from "../App";
import { FaCircleCheck, FaCircleNotch } from "react-icons/fa6";

const Todo = ({ todoItem }) => {
  const { completeTodo } = useContext(AppContext);
  return (
    <div
      className={
        todoItem.completed
          ? "flex justify-between items-center p-3 py-5 border border-green-400 shadow-md rounded-md"
          : "flex justify-between items-center p-3 py-5 border border-blue-400 shadow-md rounded-md"
      }
    >
      <h3
        className={
          todoItem.completed
            ? "text-gray-400 text-lg line-through"
            : "text-gray-600 text-lg"
        }
      >
        {todoItem.name}
      </h3>

      <button onClick={() => completeTodo(todoItem)}>
        {todoItem.completed ? (
          <FaCircleCheck className="text-green-400 text-2xl" />
        ) : (
          <FaCircleNotch className="text-blue-400 text-2xl" />
        )}
      </button>
    </div>
  );
};

export default Todo;
