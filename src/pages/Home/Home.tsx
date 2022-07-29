import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TotalCompleteItems from "../../components/Complete";
import ToggleMode from "../../components/ToggleMode";

import DogWidget from "../../Widgets/DogWidget";
import IpWidget from "../../Widgets/IpWidget";
import CatWidget from "../../Widgets/CatWidget";
import BoredWidget from "../../Widgets/BoredWidget";
import WeatherWidget from "../../Widgets/WeatherWidget";

export const Home = () => {
  return (
    <>
      <div className='container  p-4 mt-5'>
        <ToggleMode />
        <div className='row'>
          <div className='col-sm'>
            <AddTodo />
            <TodoList />
            <TotalCompleteItems />
          </div>
          <div className='col'>
            <div className='row mb-4 ms-0'>
              <WeatherWidget />
            </div>
            <div className='row mb-4'>
              <div className='col'>
                <DogWidget />
              </div>
              <div className='col'>
                <IpWidget />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <BoredWidget />
              </div>
              <div className='col'>
                <CatWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
