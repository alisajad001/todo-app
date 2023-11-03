import { useContext } from "react";
import { AppContext } from "../App";
import { FaCirclePlus } from "react-icons/fa6";

const Header = () => {
  const { todo, setTodo, addTodo } = useContext(AppContext);
  return (
    <div className="bg-blue-400 h-[16rem] rounded-bl-[7rem] p-3 px-7 relative border-b-8 border-b-blue-300 mb-5">
      <h1 className="text-3xl text-slate-200 mx-1 my-6 font-semibold">
        Plan your day
      </h1>
      <input
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, completed: false })}
        className="outline-none p-3 w-full rounded-full"
        placeholder="Meet John..."
      />

      <button onClick={addTodo}>
        <FaCirclePlus className="text-white text-5xl absolute right-6 bottom-6" />
      </button>
    </div>
  );
};

export default Header;
