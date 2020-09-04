import React, { Component } from "react";
import NavBar from "../components/navbar";
import CoinData from "../components/coindata";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <CoinData />
      </>
    );
  }
}

export default App;
