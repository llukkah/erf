import React from "react";
import "./Nav.css";
import LogoGradient from "../Graphics/LogoGradient.png";

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={LogoGradient} className="logo-image" />
          <div className="erf-nav-logo">
            <p>EMERGENCY</p>
            <p>RELEASE</p>
            <p>FUND</p>
          </div>
        </div>
        <p>
          <a href="#" className="donate-link">
            DONATE
          </a>
        </p>
      </div>
    </div>
  );
}
