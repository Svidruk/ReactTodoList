import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TotalCompleteItems from "../../components/Complete";

export const Home = () => {
  return (
    <div className='container bg-white p-4 mt-5'>
      <AddTodo />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};
