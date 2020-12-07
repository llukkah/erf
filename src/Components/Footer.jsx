import React from "react";
import "./Footer.css";
import Instagram from "../Graphics/instagram.svg";
import Facebook from "../Graphics/facebook.svg";
import Twitter from "../Graphics/twitter.svg";

export default function Footer() {
  const today = new Date();
  return (
    <div>
      <div className="footer-div">
        <div className="footer-links">
          <img src={Instagram} />
          <span><img src={Facebook} /></span>
          <img src={Twitter} />
        </div>
        <div className="footer-date">
          <p>
            &copy; EMERGENCY RELEASE FUND {today.getFullYear()}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
