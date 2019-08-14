import React, { Component } from "react";
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
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
                minHeight={this.state.height + "px"}
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
}

export default Home;
