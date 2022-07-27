import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { TodoData } from "../interfaces/TodoData";
import CompleteItem from "./CompleteItem";
import { ReactComponent as RightArrow } from "../assets/icons/RightArrow.svg";
import { ReactComponent as DownArrow } from "../assets/icons/DownArrow.svg";

const TotalCompleteItems = () => {
  const [open, setOpen] = useState(false);

  const todos = useSelector((state: RootState) =>
    state.todos.todoList.filter((todo: TodoData) => todo.completed === true)
  );

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant='primary m-2'
        aria-controls='example-collapse-text'
        aria-expanded={open}>
        Show complete
        {open ? <DownArrow /> : <RightArrow />}
      </Button>
      <Collapse in={open}>
        <div className='mt-2 mb-5' id='example-collapse-text'>
          <ul className='list-group'>
            {todos.map((todo: TodoData) => (
              <CompleteItem
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
