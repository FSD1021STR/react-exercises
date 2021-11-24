import React from "react";
import "./flexboxResponsive.css";

function FlexboxResponsive() {
  return (
    <div className="flexbox-desktop">
      <div className="flexbox-tablet">
        <div className="section">HEADER</div>
        <div className="section">MAIN</div>
      </div>
      <div className="section">RELATED</div>
    </div>
  );
}

export default FlexboxResponsive;
