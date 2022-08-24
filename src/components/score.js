import React, { Component } from "react";

class Score extends Component {
  render() {
    let Color;
    if (this.props.score > 80) Color = "high-score";
    else if (this.props.score > 50) Color = "medium-score";
    else Color = "low-score";

    return <div className={Color}>{this.props.score}</div>;
  }
}
export default Score;
