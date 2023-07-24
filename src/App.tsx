import "./App.css";
import Router from "./router/Router";
import "./assets/css/slick-carousel/slick-theme.min.css";
import "./assets/css/slick-carousel/slick.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
