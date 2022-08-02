import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/Slices/TodoSlice";
import Button from "react-bootstrap/Button";
import { RootState } from "../redux/store/store";

const AddTodo = () => {
  let [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event: React.SyntheticEvent) => {
    value = value.trim();
    if (value.length === 0) {
      alert("Field is empty");
    } else if (value.length > 40) {
      alert("expression is too long");
    } else {
      event.preventDefault();
      dispatch(
        addTodo({
          title: value,
        })
      );
      setValue("");
    }
  };

  const AuthState = useSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <form onSubmit={onSubmit} className='flex form-inline mb-3'>
      <input
        type='text'
        className='form-control mr-sm-2'
        placeholder='Add todo...'
        value={value}
        onChange={(event) => setValue(event.target.value)}></input>
      <Button disabled={!AuthState.isAuth} type='submit' variant='primary m-2'>
        Submit
      </Button>
    </form>
  );
};

export default AddTodo;
