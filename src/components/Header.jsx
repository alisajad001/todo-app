import { useState } from "react";
import AddBtn from "./AddBtn";

const Header = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState({ name: "", completed: false });

  // Add a todo
  const addTodo = () => {
    const newTodos = [...todos, todo];
    todo.name === "" ? alert("Add a title first...") : setTodos(newTodos);
    setTodo({ name: "", completed: false });
  };

  return (
    <div className="bg-blue-400 h-72 rounded-bl-[10rem] p-3 px-7 relative">
      <h1 className="text-3xl text-slate-200 mx-1 my-6 ">Good Morning</h1>
      <input
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, completed: false })}
        className="outline-none p-4 w-full rounded-full"
        placeholder="Workout..."
      />

      <AddBtn addTodo={addTodo} />
    </div>
  );
};

export default Header;
