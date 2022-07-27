import React from "react";
import { Provider } from "react-redux";
import ThemeSelector from "./components/ThemeSelector";
import { store } from "./redux/store/store";
import AppRouter from "./routes/ReactRouter";

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeSelector>
      <AppRouter />
    </ThemeSelector>
  </Provider>
);

export default App;
