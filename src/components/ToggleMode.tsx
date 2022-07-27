import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/Slices/ThemeSlice";
import { AppDispatch, RootState } from "../redux/store/store";

const ToggleMode = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => {
    return state.theme;
  });

  const toggle = () => {
    dispatch(toggleTheme({ theme }));
  };

  return (
    <div className='position-relative'>
      <Form>
        <Form.Check
          type='switch'
          id='custom-switch'
          label='dark/light'
          className='position-absolute top-0 end-0 translate-middle'
          checked={!theme.theme}
          onClick={toggle}
        />
      </Form>
    </div>
  );
};

export default ToggleMode;
