import React, { Component } from "react";
import tree from "./familyTree";
import Name from "./components/Name";
import "./App.css";

class App extends Component {
  state = {
    current: tree.root
  };
  addNextLevel = newLevel => {
    if (this.state.clicked) {
      this.setState({
        current: this.state.current.nextLevel[newLevel]
      });
    } else {
      this.setState({
        current: this.state.current.nextLevel[newLevel],
        clicked: true
      });
    }
  };
  convertText = text => {
    return text.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
  };
  reset = () => {
    this.setState({
      current: tree.root
    });
  };
  render() {
    console.log(this.state.current);
    let keys = [];
    if (this.state.current.hasOwnProperty("nextLevel")) {
      keys = Object.keys(this.state.current.nextLevel);
    }

    return (
      <div className="App">
        <h1 className="title">CNY Call What???</h1>
        <h1>This person is my...</h1>
        <div className="relations">
          {this.state.current.hasOwnProperty("nextLevel")
            ? keys.map(key => {
                return (
                  <button onClick={() => this.addNextLevel(key)}>
                    {this.convertText(key)}
                  </button>
                );
              })
            : null}
        </div>
        <Name chineseName={this.state.current.name}></Name>
        <button id="reset" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}

export default App;
