import { FC } from "react";
import { TodoData } from "../interfaces/TodoData";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, pinTodo } from "../redux/Slices/TodoSlice";
import { ReactComponent as Pin } from "../assets/icons/Pin.svg";
import { ReactComponent as FilledPin } from "../assets/icons/FilledPin.svg";
import { ReactComponent as Check } from "../assets/icons/Check.svg";
import { ReactComponent as Bucket } from "../assets/icons/Bucket.svg";
import { ReactComponent as Minus } from "../assets/icons/Minus.svg";

const TodoItem: FC<TodoData> = ({ id, title, completed, pinned, datetime }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handlePinClick = () => {
    dispatch(pinTodo({ id: id, pinned: !pinned }));
  };

  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between'>
        {completed ? (
          <>
            <p>
              <span className='d-flex align-items-center text-decoration-line-through'>
                {title}
              </span>
            </p>
            <p>
              <label className='font-monospace me-3'>{datetime}</label>
              <button
                onClick={handleCompleteClick}
                className='btn btn-warning ms-3'>
                <Minus />
              </button>
            </p>
          </>
        ) : (
          <>
            <p>
              <span className='d-flex align-items-center'>{title}</span>
            </p>
            <p>
              <label className='font-monospace me-3'>{datetime}</label>
              <button
                onClick={handleCompleteClick}
                className='btn btn-success me-1'>
                <Check />
              </button>
              <button
                onClick={handleDeleteClick}
                className='btn btn-danger me-3'>
                <Bucket />
              </button>
              <button
                onClick={handlePinClick}
                className={`btn btn-outline-primary ${
                  pinned && "btn btn-primary"
                }`}>
                {pinned ? <FilledPin /> : <Pin />}
              </button>
            </p>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
