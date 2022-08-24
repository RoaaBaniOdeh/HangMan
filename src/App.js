import logo from "./logo.svg";
import "./App.css";
import Score from "./components/score";
import Solution from "./components/solution";
import Letters from "./components/letters";
import { Component } from "react";
import EndGame from "./components/EndGame";

class App extends Component {
  generateLetterStatuses() {
    let letterStatus = {};

    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  selectLetter = (letter) => {
    let letters = this.state.letterStatus;
    letters[letter] = true;
    let Winner = this.state.solution.word.split("").filter((w) => letters[w]);
    let isWinner = false;
    if (Winner.length == this.state.solution.word.length) isWinner = "win";
    if (this.state.solution.word.indexOf(letter) == -1) {
      if (this.state.score - 20 <= 0) isWinner = "lose";
      this.setState({
        letterStatus: letters,
        score: this.state.score - 10,
        isWinner:isWinner
      });
    } else
      this.setState({
        letterStatus: letters,
        score: this.state.score + 5,
        isWinner: isWinner,
      });
  };
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "BURGER",
        hint: "Best dish ever",
      },
      score: 100,
      isWinner: false,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isWinner == "win" ? (
            <EndGame isWinner={true} />
          ) : this.state.isWinner == "lose" ? (
            <EndGame isWinner={false} />
          ) : (
            <Score score={this.state.score} />
          )}
          <Solution
            letterStatus={this.state.letterStatus}
            solution={this.state.solution}
          />
          <Letters
            letterStatus={this.state.letterStatus}
            selectLetter={this.selectLetter}
          />
        </header>
      </div>
    );
  }
}

export default App;
