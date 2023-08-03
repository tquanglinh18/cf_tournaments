import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/css/slick-carousel/slick-theme.min.css";
import "./assets/css/slick-carousel/slick.min.css";
import store from "./redux/stores/store";
import Router from "./router/Router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
