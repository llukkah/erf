import React from "react";
import Iframe from 'react-iframe'
import "./Donate.css"

export default function Donate() {
  return (
    <div>
      <p className="donate-p">Donate</p>
      <p className="donate-1">Thank you for your generosity. Your contribution will be used to post bail for people held in NYC jails, prioritizing BIPOC trans people, medically high-risk or otherwise marginalized populations, and anyone within the broader LGBTQ+ spectrum. Additionally, we assist with ICE detention immigration bonds for LGBTQ+ detainees. 

A small portion of your contribution may be used for post-release support kits and costs associated with posting bail (transportation, PPE, etc.).

To donate to Emergency Release Fund:

Text bail to (202) 858-1233</p>
<p className="donate-1"> To donate with credit card, PayPal, Venmo, ApplePay givebutter.com/erf </p>

<Iframe url="https://givebutter.com/embed/c/erf"
        width="450px"
        height="615px"
        id="myId"
        className="givebutter"
        display="initial"
        position="relative"
        scrolling="no"
        allowpaymentrequest="true"/>
{/*   style="max-width: 601px;" frameborder="0"  seamless ></iframe><script src="https://givebutter.com/js/widget.js"></script> */}
    </div>
  );
}