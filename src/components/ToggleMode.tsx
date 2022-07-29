import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/Slices/ThemeSlice";
import { AppDispatch, RootState } from "../redux/store/store";

const ToggleMode = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  const [value, setValue] = useState(theme.darkTheme);

  useEffect(() => {
    value
      ? document.documentElement.setAttribute("darkMode", "")
      : document.documentElement.removeAttribute("darkMode");
  }, [value]);

  const toggle = () => {
    setValue((value) => !value);
    dispatch(toggleTheme({ theme }));
  };

  return (
    <Form>
      <Form.Check
        type='switch'
        id='custom-switch'
        label='dark mode'
        className='position-absolute mt-5 top-0 end-0 translate-middle'
        checked={theme.darkTheme}
        onChange={toggle}
      />
    </Form>
  );
};

export default ToggleMode;
