import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "../redux/store";
import { TodoData } from "../interfaces/TodoData";

const TodoList = () => {
  const todos = useSelector((state: RootState) =>
    state.todos.todoList.filter((todo: TodoData) => todo.completed === false)
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
