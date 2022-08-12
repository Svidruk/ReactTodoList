import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
