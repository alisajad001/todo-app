import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodosCount from "./components/TodosCount";

export const AppContext = createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ name: "", completed: false });

  // Add a todo
  const addTodo = () => {
    const newTodos = [...todos, todo];
    todo.name === "" ? alert("Add a title first...") : setTodos(newTodos);
    setTodo({ name: "", completed: false });
  };

  // Complete a todo
  const completeTodo = (todoName) => {
    const newTodos = todos.map((todo) => {
      return todo.name == todoName.name
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <AppContext.Provider
        value={{ todos, setTodos, addTodo, completeTodo, todo, setTodo }}
      >
        <Header />
        <Todos />
        <TodosCount />
      </AppContext.Provider>
    </div>
  );
};

export default App;
