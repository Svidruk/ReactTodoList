import { useDispatch } from "react-redux";
import { FC } from "react";
import { TodoData } from "../interfaces/TodoData";
import { toggleComplete } from "../redux/TodoSlice";

const CompleteItem: FC<TodoData> = ({
  id,
  title,
  completed,
  datetime,
}) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center text-decoration-line-through'>{title}</span>
        <p>
          <label className='font-monospace me-3'>{datetime}</label>
          <button
            onClick={handleCompleteClick}
            className='btn btn-warning ms-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-dash'
              viewBox='0 0 16 16'>
              <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' />
            </svg>
          </button>
        </p>
      </div>
    </li>
  );
};

export default CompleteItem;