import React, { Component } from "react";
import HogList from "./HogList";
import "../App.css";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="App flex-container">
        <Nav />
        <HogList />
      </div>
    );
  }
}

export default App;
