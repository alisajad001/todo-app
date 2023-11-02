import React from "react";
import { FaCircleCheck, FaCircleNotch } from "react-icons/fa6";

const Todo = ({ todo, todos, setTodos }) => {
  // Complete a todo
  const completeTodo = (todoName) => {
    const newTodos = todos.map((todo) => {
      return todo.name == todoName.name
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(newTodos);
    console.log(todoName.completed);
  };
  return (
    <div className="flex justify-between items-center p-3 py-5 bg-blue-100 shadow-md rounded-md">
      <h3 className="text-gray-700">{todo.name}</h3>

      <button onClick={() => completeTodo(todo)}>
        {todo.completed ? (
          <FaCircleCheck className="text-green-400 text-2xl font-bold" />
        ) : (
          <FaCircleNotch className="text-blue-400 text-2xl font-bold" />
        )}
      </button>
    </div>
  );
};

export default Todo;
