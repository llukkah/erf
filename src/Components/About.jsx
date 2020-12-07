import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <header className="App-header">
        <p className="motto">Fuck Cash Bail</p>
        <div className="about-div">
          <div className="line-div"></div>
          <p className="about">
            The mission of the Emergency Release Fund is to ensure that no trans
            person at risk in New York City jails remains in detention before
            trial. ERF helps families raise money to bail out their loved ones.
          </p>
        </div>
      </header>
    </div>
  );
}
