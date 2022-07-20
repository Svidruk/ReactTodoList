import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event: React.SyntheticEvent) => {
    if (value.length > 0) {
      event.preventDefault();
      dispatch(
        addTodo({
          title: value,
        })
      );
    }
    else{
      alert('Field is empty')
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex form-inline mt-3 mb-3'>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Add todo...'
        value={value}
        onChange={(event) => setValue(event.target.value)}></input>
      <button type='submit' className='btn btn-primary mb-2'>
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
