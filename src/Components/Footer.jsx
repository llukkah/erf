import React from "react";
import "./Footer.css";

export default function Footer() {
    
    const today = new Date();
  return (
    <div>
        <div className="footer-links">
        <p className="footer-date"> &copy; {today.getFullYear()} </p>
        </div>
    </div>
  );
}
