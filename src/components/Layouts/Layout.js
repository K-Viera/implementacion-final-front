import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import Menu from "./Menu";
function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
