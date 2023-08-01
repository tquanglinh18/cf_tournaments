import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <div className="mt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
