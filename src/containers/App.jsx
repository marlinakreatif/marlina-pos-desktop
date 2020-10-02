import React, { Component } from "react";
import * as IPC from "../constants/ipc.constant";
import invokeHandler from "../ipc/rendererIPC";

export default class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    invokeHandler(IPC.PRODUCT.ALL).then((res) => {
      this.setState({
        products: res,
      });
    });
  }

  addProductDumy = () => {
    invokeHandler(IPC.PRODUCT.ADD, {
      barcode: "18210938192",
      name: "Jamu sebel puyeng",
      price: 90000,
      stock: 10,
      createAt: new Date().getTime(),
    }).catch((err) => {
      alert(err);
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <span>Tabel Produk</span>
        <div>
          <ul>
            {products.map((data, index) => {
              return (
                <li key={index}>
                  <span>{data.name}</span>
                </li>
              );
            })}
          </ul>
          <button onClick={this.addProductDumy}>Tambah Data</button>
        </div>
      </div>
    );
  }
}
