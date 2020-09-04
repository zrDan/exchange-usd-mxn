import React, { Component } from "react";
import axios from "axios";
import "./styles/containdata.css";

class CoinData extends Component {
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
      <div className="container">
        <div className="header">
          <div>Banco</div>
          <div>Compra (USD)</div>
          <div>Venta (USD)</div>
        </div>

        {this.state.banks.map((bank) => (
          <div key={bank._id} className="item">
            <div className="bank-name">
              <img src={bank.Logo} className="bank-logo" alt="logo" />
              {bank._id}
            </div>
            <div className="exchange">${bank.Compra}</div>
            <div className="exchange">${bank.Venta}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default CoinData;
