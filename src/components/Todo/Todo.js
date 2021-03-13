import React, { useContext } from 'react';
import { TodoListContext } from '../../contexts/TodosContext';

export const Todo = ({ todo }) => {
  const { deleteTodo, findItem } = useContext(TodoListContext)
  return (
    <li className="li-item">
      <span>{todo.title} </span>
      <div>
        <button
          className="button-delete todo-button"
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="fas fa-times-circle"></i>
        </button>{' '}
        <button className="button-edit todo-button" onClick={() => findItem(todo.id)}>
        <i className="far fa-edit"></i>
        </button>
      </div>
    </li>
  )
}

