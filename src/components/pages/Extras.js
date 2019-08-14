import React from "react";

function Extras() {
  return (
    <React.Fragment>
      <div style={section}>
        <a href="/sq1-alg-tools">
          <span style={title}>Square-1 Alg Tools</span>
        </a>
        <span style={description}>
          {" "}
          - tool to format and convert Square-1 algorithms
        </span>
      </div>
    </React.Fragment>
  );
}

const section = {
  padding: "3rem 4rem",
  backgroundColor: "#444",
  height: "100vh"
};

const title = {
  fontSize: "160%",
  textDecoration: "underline"
};

const description = {
  fontSize: "120%",
  color: "white"
};
export default Extras;
