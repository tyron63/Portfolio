import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const FlippyStyle = {
  width: "200px",
  height: "300px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center",
};

const DefaultCardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: "#41669d",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img  style={{ width: "100%" }} />
      RICK
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
        }}
      >
        {children}
        <br />
        (FRONT SIDE)
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "#175852",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      ROCKS
      <span
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "10px",
        }}
      >
        {children}
        <br />
        (BACK SIDE)
      </span>
    </BackSide>
  </React.Fragment>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            flex: "1 0 200px",
            justifyContent: "space-around",
            "flex-wrap": "wrap",
          }}
        >
          <Flippy
            ref={(r) => (this.flippyHorizontal = r)}
            flipOnClick={false}
            style={FlippyStyle}
          >
            <DefaultCardContents>
              I flip horizontally with an event
              <br />
              <button
                type="button"
                onClick={() => this.flippyHorizontal.toggle()}
              >
                Toggle Me!
              </button>
            </DefaultCardContents>
          </Flippy>
        </div>
      </div>
    );
  }
}

export default App;
