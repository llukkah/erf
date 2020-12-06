import React from "react";
import "./Footer.css";

export default function Footer() {
  const today = new Date();
  return (
    <div>
      <div className="footer-div">
        <p className="footer-links"></p>
        <p className="footer-date">
          {" "}
          &copy; EMERGENCY RELEASE FUND {today.getFullYear()}{" "}
        </p>
      </div>
    </div>
  );
}
