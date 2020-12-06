import React from "react";
import "./Footer.css";
import Instagram from '../Graphics/instagram.svg'

export default function Footer() {
  const today = new Date();
  return (
    <div>
      <div className="footer-div">
        <p className="footer-links">
            <img src={Instagram}/>
        </p>
        <p className="footer-date">
          {" "}
          &copy; EMERGENCY RELEASE FUND {today.getFullYear()}{" "}
        </p>
      </div>
    </div>
  );
}
