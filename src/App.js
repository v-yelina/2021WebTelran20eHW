import React, { Component } from "react";
import ColorBlock from "./components/ColorBlock";
import "./index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    const boardSize = this.getRandom();
    this.state = {
      boardSize,
      style: {
        width: "max-content",
        display: "grid",
        gridTemplateColumns: `repeat(${boardSize}, 1fr )`,
        margin: "20px",
      },
    };
  }

  getRandom = () => {
    let min = 5;
    let max = 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  renderBoard = () => {
    const output = new Array(this.state.boardSize * this.state.boardSize).fill(
      0
    );
    console.log(output);
    console.log(this.state.boardSize);
    return output.map((_, index) => {
      if (
        (Math.trunc(index / this.state.boardSize) +
          (index % this.state.boardSize)) %
          2 ===
        0
      ) {
        return <ColorBlock key={index} name="black" />;
      }
      return <ColorBlock key={index} name="red" />;
    });
  };

  render() {
    return (
      <div>
        <div style={this.state.style}>{this.renderBoard()}</div>
      </div>
    );
  }
}
