import React, { FC, lazy } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { toggleTheme } from "../redux/Slices/ThemeSlice";
/*import LightTheme from "../Themes/LightTheme";
import DarkTheme from "../Themes/DarkTheme";*/

const LightTheme = lazy(() => import("../Themes/LightTheme"));
const DarkTheme = lazy(() => import("../Themes/DarkTheme"));

interface Props {
  children: React.ReactNode;
}

const ThemeSelector: FC<Props> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  const toggle = () => {
    dispatch(toggleTheme({ theme }));
  };

  return (
    <>
      <div className='position-relative'>
        <Form>
          <Form.Check
            type='switch'
            id='custom-switch'
            label='darkmode on'
            className='position-absolute top-0 end-0 translate-middle'
            checked={theme.theme}
            onChange={toggle}
          />
        </Form>
      </div>
      <React.Suspense>
        {theme.theme ? <DarkTheme /> : <LightTheme />}
      </React.Suspense>
      {children}
    </>
  );
};

//export const useThemeContext = () => useContext(ThemeContext);

export default ThemeSelector;
