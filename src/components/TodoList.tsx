import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "../redux/store/store";
import { TodoData } from "../interfaces/TodoData";

const TodoList = () => {
  const AuthState = useSelector((state: RootState) => {
    return state.auth;
  });
  
  const todos = useSelector((state: RootState) => 
      state.todos.todoList.filter((todo: TodoData) => todo.completed === false && AuthState.isAuth)
  );

  return (
    <ul className='list-group'>
      {todos.map((todo: TodoData) => (
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
  );
};

export default TodoList;
