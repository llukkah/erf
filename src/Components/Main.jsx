import React from "react";
// import "./Nav.css";
// import "./About.css";
// import "./Footer.css";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import { Route } from "react-router-dom";
import Donate from "./Donate.jsx";

export default function Main() {
  return (
    <div>
      <Nav />
      <Route exact path="/donate" render={() => <Donate />} />
      <About />
      <Footer />
    </div>
  );
}
