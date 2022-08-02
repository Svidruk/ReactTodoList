import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TotalCompleteItems from "../../components/Complete";
import ToggleMode from "../../components/ToggleMode";
//import { ModalAuth } from "../../components/ModalAuth";

import DogWidget from "../../Widgets/DogWidget";
import IpWidget from "../../Widgets/IpWidget";
import CatWidget from "../../Widgets/CatWidget";
import BoredWidget from "../../Widgets/BoredWidget";
import WeatherWidget from "../../Widgets/WeatherWidget";
import { useCallback, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/Slices/authReducer";
import { RootState } from "../../redux/store/store";

interface userData {
  username: string;
  password: string;
}

export const Home = () => {
  const dispatch = useDispatch();
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validate = Yup.object({
    username: Yup.string()
      .min(2, "Username must be at least 2 characters")
      .max(16, "Username can't be longer than 16 characters")
      .required("username is required"),
    password: Yup.string()
      .min(4, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const AuthState = useSelector((state: RootState) => {
    return state.auth;
  });

  const handleFormSubmit = useCallback((values: userData) => {
    if (values.password.toString() == process.env.REACT_APP_PASSWORD) {
      const username = values.username;
      dispatch(setAuth({ isAuth: true, username }));
      handleClose();
    } else {
      alert("Wrong Pass");
    }
  }, []);

  const ExitFromLogin = () => {
    dispatch(setAuth({ isAuth: false }));
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} animation={false}>
        <button
          type='button'
          onClick={handleClose}
          className='btn-close position-absolute m-2 top-0 end-0 translate-middles'
          aria-label='Close'></button>
        <div className='justify-content-center m-5'>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={handleFormSubmit}>
            {() => (
              <Form>
                <div>
                  <div className='form-group'>
                    <Field
                      className='form-control mb-2'
                      type='username'
                      name='username'
                      placeholder='Username'
                    />
                    <ErrorMessage
                      component='div'
                      name='username'
                      className='text-danger'
                    />
                  </div>
                  <div className='form-group'>
                    <Field
                      className='form-control'
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                    <ErrorMessage
                      component='div'
                      name='password'
                      className='text-danger'
                    />
                  </div>
                </div>
                <div
                  className='btn-group modal-footer'
                  role='group'
                  aria-label='Basic example'>
                  <button type='submit' className='btn btn-success btn-block'>
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <div className='container p-4 mt-5'>
        <ToggleMode />
        <div className='d-flex position-absolute mt-4 top-0 end-0 translate-middles'>
          {AuthState.isAuth ? (
            <div className='me-3'>
              {AuthState.username}
              <Button
                variant='primary'
                onClick={ExitFromLogin}
                className='ms-3 me-3 rounded-4'>
                Exit
              </Button>
            </div>
          ) : (
            <Button
              variant='primary'
              onClick={handleShow}
              className='ms-3 me-3'>
              Login
            </Button>
          )}
        </div>

        <div className='row'>
          <div className='col-sm'>
            <AddTodo />
            <TodoList />
            <TotalCompleteItems />
          </div>
          {AuthState.isAuth && (
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
          )}
        </div>
      </div>
    </>
  );
};
