import { useContext } from "react";
import { AppContext } from "../App";

const TodosCount = () => {
  const { todos } = useContext(AppContext);
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 flex justify-between rounded-full bg-blue-400 text-white font-semibold w-80 bottom-7 p-4 px-6 counter">
      <h2>Todos: {todos.length}</h2>
      <h2>Completed: {todos.filter((todo) => todo.completed).length}</h2>
    </div>
  );
};

export default TodosCount;
