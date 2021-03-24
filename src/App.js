import React from "react";
import TodoListContextProvider from "./contexts/TodosContext";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoForm } from "./components/TodoForm/TodoForm";

import "./App.css";

const App = () => {
  return (
    <TodoListContextProvider>
      <div className="container">
        <div className="wrapper">
          <div className='header'>
            <h1>TODO LIST</h1>
          </div>
          <div className="block">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoListContextProvider>
  );
};

export default App;
