import React, { Component } from "react";
import Logo from "../img/logo.svg";
import github from "../img/github-icon.svg";
import mail from "../img/mail-icon.svg";
import "./styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navContent">
        <img className="logo" src={Logo} alt="logo" />
        <ul className="option-list">
          <li>
            <a href="https://github.com/zrDan/exchange-usd-mxn">
              <img className="github-icon" src={github} alt="github-icon" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
