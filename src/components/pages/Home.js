import React from "react";
import LazyHero from "react-lazy-hero";
import Background from "../../img/yuh.jpg";
import logo from "../../img/logo.png";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <LazyHero
        imageSrc={Background}
        minHeight={"100vh"}
        color={"#4d4747"}
        opacity={0.3}
        transitionDuration={400}
      >
        <div className="main-text">
          <img src={logo} className="logo" alt="logo" />
          <h1>Hashtag Cuber</h1>
          <h3>Eva Kato</h3>
          <h4>
            <span>Competitive Speedcuber & Content Creator</span>
          </h4>
        </div>
      </LazyHero>
    </React.Fragment>
  );
}

export default Home;
