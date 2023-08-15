import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      play: true
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.play) {
        this.setState((prevState) => {
          return {
            count: prevState.count + 1
          };
        });
      }
    }, 1000);
  }

  toogle = () => {
    this.setState((prevState) => {
      return {
        play: !prevState.play
      };
    });
  };

  render() {
    return (
      <div className="App">
        <p>counter:{this.state.count <= 10 ? this.state.count : 10}</p>
        <p>counter:{this.state.count}</p>
        <button onClick={this.toogle}>
          {this.state.play ? "Play" : "Pause"}
        </button>
      </div>
    );
  }
}
export default App;
