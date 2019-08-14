import React from "react";
import { Link } from "react-router-dom";
import "./MobileHeader.css";

function MobileHeader() {
  function dropMenu() {
    document.getElementById("toggle").checked = false;
  }
  return (
    <div>
      <a
        href="https://www.youtube.com/hashtagcuber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube" style={icon} />
      </a>
      <a
        href="https://www.instagram.com/hashtagcuber/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram" style={icon} />
      </a>

      <label htmlFor="toggle">
        <i className="fas fa-bars fa-2x" />
      </label>
      <input type="checkbox" id="toggle" />
      <div className="menu">
        <div className="headerStyle">
          <Link to="/" style={linkStyle} onClick={dropMenu}>
            Home
          </Link>
        </div>
        <div className="headerStyle">
          <Link to="/about" style={linkStyle} onClick={dropMenu}>
            About
          </Link>
        </div>
        <div className="headerStyle">
          <Link to="/extras" style={linkStyle} onClick={dropMenu}>
            Extras
          </Link>
        </div>
      </div>
    </div>
  );
}

const icon = {
  display: "inline",
  fontSize: "2rem",
  padding: "0 1rem",
  verticalAlign: "middle",
  float: "left"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "inline",
  padding: "0 1rem",
  verticalAlign: "middle"
};

export default MobileHeader;
