import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/css/slick-carousel/slick-theme.min.css";
import "./assets/css/slick-carousel/slick.min.css";
import Header from "./components/header/Header";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
