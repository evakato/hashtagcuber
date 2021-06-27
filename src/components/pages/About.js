import React from "react";
import aboutImg from "../../img/about.jpg";
import cubicleImg from "../../img/cubicle.png";
import "./About.css";

function About() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="grid-container">
          <div style={gridItem}>
            <img
              src={aboutImg}
              style={aboutImgStyle}
              className="about-img"
              alt="about img"
            />
          </div>
          <div style={gridItem}>
            <div style={gridSubContainer}>
              <p>
                Eva Kato is a dominant female cuber from the US who produces
                YouTube content about speedsolving. She is 19 years old and has
                been cubing for over eight years. Eva mainly practices 3x3 and
                Square-1, but thoroughly enjoys all WCA events. Her other
                interests include soccer, programming, and music.
              </p>
              <p>
                Business inquiries:{" "}
                <a
                  href="mailto:hashtagcuber@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={importantLinks}>hashtagcuber@gmail.com</span>
                </a>
              </p>
              <p>
                Learn more:
                <a
                  href="https://www.worldcubeassociation.org/persons/2013KATO01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={importantLinks}> WCA Profile</span>
                </a>{" "}
                |{" "}
                <a
                  href="https://cubepb.com/user/11925"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={importantLinks}>Mains and PBs</span>
                </a>{" "}
                |{" "}
                <a
                  href="http://www.teamcubicle.com/cuber/eva-kato/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={importantLinks}>TeamCubicle Profile</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="grid-box-container">
          <div style={gridBoxItem} className="top-item">
            <h4>Features</h4>
            <h5>
              <i className="fas fa-check-circle " />
              Co-host of the{" "}
              <a
                href="https://dlsonepodcast.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Dlsone Podcast</span>
              </a>
              , a monthly cubing podcast{" "}
            </h5>
            <h5>
              <i className="fas fa-check-circle " />
              Featured in{" "}
              <a
                href="http://www.ianscheffler.com/book/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Cracking the Cube</span>
              </a>{" "}
              by Ian Scheffler
            </h5>
            <h5>
              <i className="fas fa-check-circle " />
              WCA Competition Organizer
            </h5>
          </div>
          <div style={gridBoxItem}>
            <h4>Speedcubing Achievements</h4>
            <h5>
              <i className="far fa-star" />
              Square-1 US National Champion - 2017, 2019
            </h5>
            <h5>
              <i className="far fa-star" />
              US National 3x3x3 Finalist - 2017
            </h5>
            <h5>
              <i className="far fa-star" />
              US National Women's Champion - 2019
            </h5>
            <h5>
              <i className="far fa-star" />
              3x3x3 Single Women's World Record Holder - 2015
            </h5>
          </div>
          <div style={gridBoxItem}>
            <h4>Sponsor</h4>
            <a
              href="https://www.thecubicle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={cubicleImg}
                style={cubicleImgStyle}
                alt="cubicle logo"
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const aboutImgStyle = {
  borderRadius: "50%",
  border: "#55d6aa 3px solid",
};

const cubicleImgStyle = {
  width: "100%",
};

const gridSubContainer = {
  display: "inline-grid",
  gridTemplateRows: "auto auto",
  gridGap: "1rem",
};

const gridItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "120%",
};

const gridBoxItem = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "120%",
  background: "#555",
  borderBottom: "3px solid #55d6aa",
  padding: ".5em",
  marginBottom: "2rem",
};

const importantLinks = {
  padding: "0 .5rem",
};

export default About;
