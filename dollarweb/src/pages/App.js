import React, { Component } from "react";
import NavBar from "../components/navbar";
import MainCoin from "../components/coinExchange";
import bgCoin from "../img/bg-crypto.svg";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="exchangeContent">
          <div className="background-image">
            <img src={bgCoin} alt="bg-crypto" />
          </div>
          <div className="bankContainer">
            <MainCoin />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
