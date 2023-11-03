import React, { useContext } from "react";
import Todo from "./Todo";
import { AppContext } from "../App";

const Todos = () => {
  const { todos } = useContext(AppContext);
  return (
    <div className="p-3 flex flex-col gap-4 mb-14">
      {todos.map((todoItem, key) => {
        return <Todo key={key} todoItem={todoItem} />;
      })}
    </div>
  );
};

export default Todos;
