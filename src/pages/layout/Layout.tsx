import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

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
