import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: 0, timerId: undefined };
  }
  startTimer = (time) => {
    if (isNaN(time)) {
      this.setState({ currentTime: 0 });
    } else {
      if (this.state.timerId) clearInterval(this.state.timerId);
      this.setState({ currentTime: time });
      let timerId = setInterval(() => {
        this.setState((prevState) => {
          if (this.state.currentTime > 0) {
            this.setState({ currentTime: prevState.currentTime - 1 });
          } else {
            clearInterval(this.state.timerId);
          }
        });
      }, 1000);
      this.setState({ timerId: timerId });
    }
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let time = event.target.value;
      this.startTimer(time);
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div id="whole-center">
          <h1>
            Reverse countdown for
            <input id="timeCount" onKeyDown={this.handleKeyDown} /> sec.
          </h1>
        </div>
        <div id="current-time">{this.state.currentTime}</div>
      </div>
    );
  }
}

export default App;
