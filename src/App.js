import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main.jsx"

import Layout from './Components/Layout.jsx'
// import Donate from  './Components/Donate.jsx'

function App() {
  return (
    <Layout>
      <Main />
      {/* <Donate /> */}
    </Layout>
  );
}

export default App;
