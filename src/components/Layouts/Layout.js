import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
function Layout(props) {
  return (
    <React.Fragment>
      <Menu />
      {props.children}
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
