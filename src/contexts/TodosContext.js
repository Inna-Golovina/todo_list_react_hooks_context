import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const TodoListContext = createContext();

const TodoListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [editItem, setEditItem] = useState(null);

  const addTodo = title => {
    setTodos([...todos, { title, id: uuid() }]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const findItem = id => {
    const item = todos.find(todo => todo.id === id);

    setEditItem(item);
  };

  const editTodo = (title, id) => {
    const newTodos = todos.map(todo => (todo.id === id ? { title, id } : todo));

    setTodos(newTodos);
    setEditItem(null);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        clearTodos,
        findItem,
        editTodo,
        editItem
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
