import React from "react";
import "./Footer.css";
import Instagram from '../Graphics/instagram.svg'
import Facebook from '../Graphics/facebook.svg'
import Twitter from '../Graphics/twitter.svg'

export default function Footer() {
  const today = new Date();
  return (
    <div>
      <div className="footer-div">
        <div className="footer-links">
            <img src={Instagram}/>
            <img src={Facebook}/>
            <img src={Twitter}/>
            <p className="footer-date">          {" "}
          &copy; EMERGENCY RELEASE FUND {today.getFullYear()}{" "}</p>
        </div>
        {/* <div className="footer-date">
          {" "}
          &copy; EMERGENCY RELEASE FUND {today.getFullYear()}{" "}
        </div> */}
      </div>
    </div>
  );
}
