import React from "react";
import PropTypes from "prop-types";

import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

Layout.propTypes = {};

function Layout(props) {
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
