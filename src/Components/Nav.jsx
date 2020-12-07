import React from "react";
import "./Nav.css";
// import Logo from "../Graphics/LogoWhite.png";
import LogoGradient from "../Graphics/LogoGradient.png";

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          {/* <img src={Logo} className="logo-image"/> */}
          <img src={LogoGradient} className="logo-image"/>
          {/* <p className="erf-nav-logo">EMERGENCY RELEASE FUND</p> */}
          <div className="erf-nav-logo">
          <p>EMERGENCY</p>
          <p>RELEASE</p>
          <p>FUND</p>
          </div>
        </div>
        {/* <p className="donate-link">DONATE</p> */}
        <p><a href="#" className="donate-link">DONATE</a></p>
      </div>
    </div>
  );
}
