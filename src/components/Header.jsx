import { useContext } from "react";
import { AppContext } from "../App";
import { FaCirclePlus } from "react-icons/fa6";

const Header = () => {
  const { todo, setTodo, addTodo } = useContext(AppContext);
  return (
    <div className="bg-blue-400 h-72 rounded-bl-[10rem] p-3 px-7 relative">
      <h1 className="text-3xl text-slate-200 mx-1 my-6 ">Plan your day</h1>
      <input
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, completed: false })}
        className="outline-none p-4 w-full rounded-full"
        placeholder="Workout..."
      />

      <button onClick={addTodo}>
        <FaCirclePlus className="text-white text-6xl absolute right-6 bottom-6" />
      </button>
    </div>
  );
};

export default Header;
