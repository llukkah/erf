import React from "react";
import "./Nav.css";
import "./About.css";
import "./Footer.css";
import Nav from "./Nav.jsx";
// import About from "./About.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div>
      <Nav />
      {/* <About /> */}
      <Footer />
    </div>
  );
}
