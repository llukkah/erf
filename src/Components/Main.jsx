import React from "react";
import { Route } from "react-router-dom";
import Donate from "./Donate.jsx";

export default function Main() {
  return (
    <>
      <Route exact path="/donate" render={() => <Donate />} />
    </>
  );
}
