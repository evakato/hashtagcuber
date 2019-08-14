import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import MobileHeader from "./MobileHeader";
import "./Header.css";

function Header() {
  return (
    <MediaQuery minWidth={600}>
      {matches => {
        return matches ? (
          <header style={headerStyle}>
            <a
              href="https://www.youtube.com/hashtagcuber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube btn" style={icon} />
            </a>
            <a
              href="https://www.instagram.com/hashtagcuber/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram btn" style={icon} />
            </a>

            <Link to="/" style={linkStyle}>
              <span className="btn">Home</span>
            </Link>
            <Link to="/about" className="btn" style={linkStyle}>
              <span className="btn">About</span>
            </Link>
            <Link to="/extras" className="btn" style={linkStyle}>
              <span className="btn">Extras</span>
            </Link>
          </header>
        ) : (
          <header style={headerStyle}>
            <MobileHeader />
          </header>
        );
      }}
    </MediaQuery>
  );
}

const headerStyle = {
  backgroundColor: "rgba(0,0,0,0)",
  color: "#fff",
  padding: "10px",
  position: "absolute",
  zIndex: "1",
  width: "100%",
  textAlign: "right"
};

const icon = {
  display: "inline",
  fontSize: "1.8rem",
  padding: "0 1rem",
  verticalAlign: "middle",
  transition: "0.6s"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "inline",
  padding: "0 1rem",
  verticalAlign: "middle",
  fontSize: "150%"
};

export default Header;
