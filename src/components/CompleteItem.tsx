import { FC } from "react";
import { TodoData } from "../interfaces/TodoData";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/Slices/TodoSlice";
import { ReactComponent as Minus } from "../assets/icons/Minus.svg";

const CompleteItem: FC<TodoData> = ({ id, title, completed, datetime }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center text-decoration-line-through'>
          {title}
        </span>
        <p>
          <label className='font-monospace me-3'>{datetime}</label>
          <button
            onClick={handleCompleteClick}
            className='btn btn-warning ms-3'>
            <Minus />
          </button>
        </p>
      </div>
    </li>
  );
};

export default CompleteItem;
