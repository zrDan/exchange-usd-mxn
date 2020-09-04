import React, { Component } from "react";
import Logo from "../img/logo.svg";
import github from "../img/github-icon.svg";
import "./styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img className="logo" src={Logo} alt="logo" />
        <a href="https://github.com/zrDan/exchange-usd-mxn">
          <img className="github-icon" src={github} alt="github-icon" />
        </a>
      </nav>
    );
  }
}

export default NavBar;
