import React from "react";
import "./card.css";

function DevCard() {
  return (
    <div class="container">
      <div class="card">
        <div class="card-banner" />
        <div class="card-content">
          <h1 class="card-title">Pepa Gomez</h1>
          <div class="card-subtitle">
            <p>34 Años</p>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevCard;
