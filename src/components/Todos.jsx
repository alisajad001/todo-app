import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div className="p-3 flex flex-col gap-4 mb-14">
      {todos.map((todo, key) => {
        return <Todo key={key} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
