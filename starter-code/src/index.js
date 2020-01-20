import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    // logica

    return (
      <div>
        <h1>oi, react lalala</h1>
        <img src="./images/icon1.png" alt="" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
