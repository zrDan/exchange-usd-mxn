import React, { Component } from "react";
import axios from "axios";

import "./styles/coinExchange.css";

class MainCoin extends Component {
  state = {
    banks: [],
  };

  componentDidMount() {
    axios.get(`https://dollarapiv2.herokuapp.com`).then((res) => {
      console.log(res);
      this.setState({ banks: res.data });
    });
  }

  render() {
    return (
      <table className="fixed_header">
        <thead>
          <tr>
            <th>Banco</th>
            <th>Compra (USD)</th>
            <th>Venta (USD)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.banks.map((bank) => (
            <tr key={bank._id}>
              <td className="bankName">
                {" "}
                <img src={bank.Logo} className="bankLogo" alt="logo" />{" "}
                {bank._id}
              </td>
              <td className="bankData">$ {bank.Compra}</td>
              <td className="bankData">$ {bank.Venta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MainCoin;
