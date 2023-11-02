import React from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodosCount from "./components/TodosCount";

const App = () => {
  return (
    <>
      <Header />;
      <Todos />
      <TodosCount />
    </>
  );
};

export default App;
