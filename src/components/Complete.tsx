import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TotalCompleteItems = () => {
  /*const completeTodos = useSelector((state: RootState) =>
    state.todos.filter((todo: TodoData) => todo.completed === true)
  );*/

  return <h4 className='mt-3'>Complete: {/*completeTodos.length*/}</h4>;
};

export default TotalCompleteItems;
