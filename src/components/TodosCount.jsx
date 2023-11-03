import { useContext } from "react";
import { AppContext } from "../App";

const TodosCount = () => {
  const { todos } = useContext(AppContext);
  return (
    <div className="fixed flex justify-between bg-blue-400 text-white font-semibold bottom-0 w-full p-5">
      <h2>Todos: {todos.length}</h2>
      <h2>Completed: {todos.filter((todo) => todo.completed).length}</h2>
    </div>
  );
};

export default TodosCount;
