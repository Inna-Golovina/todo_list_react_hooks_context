import React, { useState, useContext, useEffect } from 'react';
import { TodoListContext } from '../../contexts/TodosContext';

export const TodoForm = () => {
  const { addTodo, clearTodos, editTodo, editItem } = useContext(TodoListContext);
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTodo(title);
      setTitle('');
    } else {
      editTodo(title, editItem.id);
    }
  }

  const handleChange = e => {
    setTitle(e.target.value);
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add a new Todo..."
        value={title}
        onChange={handleChange}
        required
        className="todo-input"
      />
      <div className="buttons">
        <button type="submit" className="button add-todo-button">
          {editItem ? 'Edit Todo' : 'Add Todo'}
        </button>
        <button className="button clear-button" onClick={clearTodos}>
          Clear
        </button>
      </div>
    </form>
  )
}

