import React, { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodosCount from "./components/TodosCount";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header setTodos={setTodos} todos={todos} />;
      <Todos todos={todos} />
      <TodosCount />
    </>
  );
};

export default App;
