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
          <img src={Facebook} />
          <span className="instagram-link">
            <img src={Instagram} />
          </span>
          <img src={Twitter} />
        </div>
        <div className="footer-date">
          <p>
            &copy;{" "}
            <a href="mailto:someone@yoursite.com" className="erf-contact-link">
              EMERGENCY RELEASE FUND
            </a>{" "}
            {today.getFullYear()}{" "}
            {/* <a href="mailto:miranda@yourcompany.com?bcc=eventsteam@yourcompany.com&subject=Excited%20to%20meet%20at%20the%20event!&body=Hi%20Miranda">EMAIL ME</a> */}
          </p>
        </div>
      </div>
    </div>
  );
}
