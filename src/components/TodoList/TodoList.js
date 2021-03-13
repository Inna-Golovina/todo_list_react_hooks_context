import React, { useContext } from "react";
import { TodoListContext } from "../../contexts/TodosContext";
import { Todo } from "../Todo";

export const TodoList = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <div>
      {todos.length ? (
        <ul className="li">
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className="no-todos">No Todos</div>
      )}
    </div>
  );
};


