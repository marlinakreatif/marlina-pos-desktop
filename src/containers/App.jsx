import React, { Component } from "react";
import { GET_ALL_PRODUCT } from "../constants/ipc.constant";
import sendAsync from "../ipc-electron/ipc-rendere";

export default class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    sendAsync({ action: GET_ALL_PRODUCT, payload: null }).then((result) =>
      this.setState({ products: result })
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <span>Selamat Datang Pekok Aku ingi selalu bersama kamu</span>
        <div>
          {products.map((data, index) => {
            return <span key={index}>{data.nama}</span>;
          })}
        </div>
      </div>
    );
  }
}
