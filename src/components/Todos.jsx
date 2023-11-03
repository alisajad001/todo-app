import React, { useContext } from "react";
import Todo from "./Todo";
import { AppContext } from "../App";

const Todos = () => {
  const { todos } = useContext(AppContext);

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));
  return (
    <div className="p-5 flex flex-col gap-4 mb-20">
      {todos.length === 0 ? (
        <>
          <img
            src="https://img.freepik.com/free-vector/steps-concept-illustration_114360-8903.jpg?w=740&t=st=1698950140~exp=1698950740~hmac=db922492dd77728733c7b9ada654673930799c7a5242394ed194cdca7458a611"
            width="250"
            className="m-auto"
          />
          <p className="text-center text-gray-500">
            So proud of you, <br /> all the tasks are completed.
          </p>
        </>
      ) : (
        sortedTodos.map((todoItem, key) => {
          return <Todo key={key} todoItem={todoItem} />;
        })
      )}
    </div>
  );
};

export default Todos;
