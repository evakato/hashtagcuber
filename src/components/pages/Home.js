import React from "react";
import MediaQuery from "react-responsive";
import LazyHero from "react-lazy-hero";
import Background from "../../img/yuh.jpg";
import MobileBackground from "../../img/mobileHero.jpg";
import logo from "../../img/logo.png";
import "./Home.css";

function Text() {
  return (
    <div className="main-text">
      <img src={logo} className="logo" alt="logo" />
      <h1>Hashtag Cuber</h1>
      <h3>Eva Kato</h3>
      <h4>
        <span>Competitive Speedcuber & Content Creator</span>
      </h4>
    </div>
  );
}

function Home() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={400}>
        {matches => {
          return matches ? (
            <LazyHero
              imageSrc={Background}
              minHeight={"100vh"}
              color={"#4d4747"}
              opacity={0.3}
              transitionDuration={400}
            >
              <Text />
            </LazyHero>
          ) : (
            <LazyHero
              imageSrc={MobileBackground}
              minHeight={"100vh"}
              color={"#4d4747"}
              opacity={0.3}
              transitionDuration={400}
            >
              <Text />
            </LazyHero>
          );
        }}
      </MediaQuery>
    </React.Fragment>
  );
}

export default Home;
