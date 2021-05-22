import React from "react";
import confLogo from "../Image/badge-header.svg";
import foto from "../Image/CV.jpg"
import "./style/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={foto}
            alt="Avatar"
          />
          <h1>
            Juan José <br /> Gamez Blanco
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>jgamezb@miumg.edu.gt</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
