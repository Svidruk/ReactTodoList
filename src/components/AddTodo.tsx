import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Slices/TodoSlice";
import Button from "react-bootstrap/Button";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event: React.SyntheticEvent) => {
    let trimmedValue = value.trim()
    if (trimmedValue.length > 0) {
      event.preventDefault();
      dispatch(
        addTodo({
          title: trimmedValue,
        })
      );
      setValue("");
    } else {
      alert("Field is empty");
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex form-inline mt-3 mb-3'>
      <input
        type='text'
        className='form-control mr-sm-2'
        placeholder='Add todo...'
        value={value}
        onChange={(event) => setValue(event.target.value)}></input>
      <Button type='submit' variant='primary m-2'>
        Submit
      </Button>
    </form>
  );
};

export default AddTodo;
