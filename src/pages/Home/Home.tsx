import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TotalCompleteItems from "../../components/Complete";
import ToggleMode from "../../components/ToggleMode";

import DogWidget from "../../Widgets/DogWidget";
import IpWidget from "../../Widgets/IpWidget";
import CatWidget from "../../Widgets/CatWidget";
import BoredWidget from "../../Widgets/BoredWidget";

export const Home = () => {
  return (
    <>
      <div className='container  p-4 mt-5'>
        <div className='row'>
          <div className='col-sm'>
            <ToggleMode />
            <AddTodo />
            <TodoList />
            <TotalCompleteItems />
          </div>
          <div className='col'>
            <div className='row mb-4'>
              <div className='col-sm'>
                <DogWidget />
              </div>
              <div className='col-sm'>
                <IpWidget />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm'>
                <BoredWidget />
              </div>
              <div className='col-sm'>
                <CatWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
