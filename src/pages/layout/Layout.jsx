
import { Outlet } from "react-router";

Layout.propTypes = {};

function Layout(props) {
  return (
    <div>
      <div className="mt-[72px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
