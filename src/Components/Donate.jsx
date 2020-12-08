import React from "react";
import Iframe from "react-iframe";
import "./Donate.css";

export default function Donate() {
  return (
    <div className="donate-container">
      <div className="donate-1">
      <p>
        Thank you for your generosity. Your contribution will be used to post
        bail for people held in NYC jails, prioritizing BIPOC trans people,
        medically high-risk or otherwise marginalized populations, and anyone
        within the broader LGBTQ+ spectrum. Additionally, we assist with ICE
        detention immigration bonds for LGBTQ+ detainees.
      </p>
      <p>
        A small portion of your contribution may be used for post-release
        support kits and costs associated with posting bail (transportation,
        PPE, etc.).
      </p>
      <p>Text bail to (202) 858-1233</p>
      </div>
      {/* <div className="donate-container"> */}
      <Iframe
        url="https://givebutter.com/embed/c/erf"
        width="450px"
        height="615px"
        className="givebutter"
        display="initial"
        // position="relative"
        scrolling="no"
        allowpaymentrequest="true"
      />
      {/* </div> */}
    </div>
  );
}
