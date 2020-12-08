import React from "react";
import "./About.css";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import { Route } from "react-router-dom";
import Donate from "./Donate.jsx";

export default function Main() {
  return (
    <div>
      <Nav />
      <Route exact path="/" render={() => <div className="main-div"></div>} />
      <Route exact path="/donate" render={() => <Donate />} />
      <About />
      <Footer />
    </div>
  );
}
