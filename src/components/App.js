import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const [field, setField] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const renderTodos = () => {
    if (todos.length !== 0) {
      return todos.map((todo) => (
        <div key={todo.id} className="todoItem">
          <div
            className="isDone"
            onClick={() => {
              onDoneTodo(todo.id);
            }}
          >
            {todo.completed ? <span>&#10003;</span> : ""}
          </div>
          <p className={"todoTitle " + (todo.completed ? "done" : "")}>
            {todo.title}{" "}
          </p>
          <span
            className="deleteItem"
            onClick={() => {
              onRemoveTodo(todo.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </span>
        </div>
      ));
    } else {
      return <div>You can relax</div>;
    }
  };

  const onChangeField = (event) => {
    setField(event.target.value);
  };

  const onAddTodo = () => {
    if (field) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), title: field, completed: false },
      });
      setField("");
    }
  };

  const onRemoveTodo = (todoId) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
  };

  const onDoneTodo = (todoId) => {
    dispatch({
      type: "DONE_TODO",
      payload: todoId,
    });
  };

  return (
    <>
      <h2 className="pageTitle">Don't forget to...</h2>
      <div className="addTodo">
        <input type="text" value={field} onChange={onChangeField} />
        <button onClick={onAddTodo}>Add</button>
      </div>
      <div className="todoList">{renderTodos()}</div>
    </>
  );
};

export default App;
