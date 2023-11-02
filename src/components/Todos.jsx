import React from "react";
import Todo from "./Todo";

const Todos = () => {
  return (
    <div className="p-3 flex flex-col gap-4">
      <Todo />
      <Todo />
    </div>
  );
};

export default Todos;
