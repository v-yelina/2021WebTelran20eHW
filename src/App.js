import React, { Component } from "react";
import { Clock } from "./components/Clock";

class App extends Component {
  render() {
    return (
      <div style={{ width: "50%", height: "100vh", margin: "auto" }}>
        <div className="clock">
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
