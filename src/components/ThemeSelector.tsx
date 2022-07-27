import React, { FC, lazy, createContext, useContext } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/ThemeSlice";
//import usePersistedState from "./hooks/usePersistentState";
//import "./scss/App.scss";
//import 'bootstrap/dist/css/bootstrap.min.css';

const LightTheme = lazy(() => import("../Themes/LightTheme"));
const DarkTheme = lazy(() => import("../Themes/DarkTheme"));

/*export enum ThemeType {
  Dark = "Dark",
  Light = "Light",
}

export type ThemeContextType = {
  themeType: ThemeType;
  Theme: React.LazyExoticComponent<React.FC>
  setCurrentTheme: () => void
};

export const ThemeContext = React.createContext({})


const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Dark, setTheme: theme => console.warn('no theme provider')});
*/
interface Props {
  children: React.ReactNode;
}

const ThemeSelector: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  /*const [theme, setTheme] = usePersistedState("theme", true);*/

  const toggleTheme = () => {
    //dispatch(toggleTheme());
  };

  return (
    <>
      <React.Suspense fallback={null}>
        <div className='position-relative'>
          <Form>
            <Form.Check
              type='switch'
              id='custom-switch'
              label='dark/light'
              className='position-absolute top-0 end-0 translate-middle'
              onChange={toggleTheme}
            />
          </Form>
        </div>
        {theme && <LightTheme />}
        {!theme && <DarkTheme />}
        {children}
      </React.Suspense>
    </>
  );
};

//export const useThemeContext = () => useContext(ThemeContext);

export default ThemeSelector;
