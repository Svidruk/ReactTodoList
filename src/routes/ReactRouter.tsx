import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
