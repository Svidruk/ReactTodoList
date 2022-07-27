import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TotalCompleteItems from "../../components/Complete";

import DogWidget from "../../Widgets/DogWidget";
import IpWidget from "../../Widgets/IpWidget";
import CatWidget from "../../Widgets/CatWidget";
import BoredWidget from "../../Widgets/BoredWidget";

export const Home = () => {
  //const {theme} = useThemeContext();

  //const switchTheme = () => theme.setTheme((prev) => !prev))//setDarkMode((prev: Boolean) => !prev);

  /*useEffect(() => {
    window.localStorage.setItem("darkmode", JSON.stringify(theme))
    //console.log(document.documentElement)
  }, [theme]);*/

  return (
    <>
      <div className='container bg-light p-4 mt-5'>
        <div className='row'>
          <div className='col-sm'>
            <AddTodo />
            <TodoList />
            <TotalCompleteItems />
          </div>
          <div className='col'>
            <div className='row mb-4'>
              <div className='col-sm'>
                <DogWidget></DogWidget>
              </div>
              <div className='col-sm'>
                <IpWidget></IpWidget>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm'>
                <BoredWidget></BoredWidget>
              </div>
              <div className='col-sm'>
                <CatWidget></CatWidget>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
