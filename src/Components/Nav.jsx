import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/donate" className="donate-link">
            Donate
          </Link>
        </p>
      </div>
    </div>
  );
}
