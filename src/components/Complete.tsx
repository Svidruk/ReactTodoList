import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../redux/store/store";
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { TodoData } from "../interfaces/TodoData";
import TodoItem from "./TodoItem";

const TotalCompleteItems = () => {
  const [open, setOpen] = useState(false);

  const AuthState = useSelector((state: RootState) => {
    return state.auth;
  });

  const todos = useSelector((state: RootState)  =>
    state.todos.todoList?.filter(
      (todo: TodoData) => todo.completed === true && AuthState.isAuth
    )
  );

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant='primary m-2'
        aria-controls='example-collapse-text'
        aria-expanded={open}>
        Show complete
        {open ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-down ms-3'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-arrow-right ms-3'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
            />
          </svg>
        )}
      </Button>
      <Collapse in={open}>
        <div className='mt-2 mb-5' id='example-collapse-text'>
          <ul className='list-group'>
            {todos?.map((todo: TodoData) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                pinned={todo.pinned}
                datetime={todo.datetime}
              />
            ))}
          </ul>
        </div>
      </Collapse>
    </>
  );
};

export default TotalCompleteItems;
