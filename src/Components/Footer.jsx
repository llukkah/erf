import React from "react";
import "./Footer.css";
import Instagram from '../Graphics/instagram.svg'
import Facebook from '../Graphics/facebook.svg'

export default function Footer() {
  const today = new Date();
  return (
    <div>
      <div className="footer-div">
        <p className="footer-links">
            <img src={Instagram}/>
            <img src={Facebook}/>
        </p>
        <p className="footer-date">
          {" "}
          &copy; EMERGENCY RELEASE FUND {today.getFullYear()}{" "}
        </p>
      </div>
    </div>
  );
}
