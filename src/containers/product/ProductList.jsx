import React, { Component } from "react";
import { Link } from "react-router-dom";
import invokeHandler from "../../ipc/rendererIPC";
import * as IPC from "../../constants/ipc.constant";

export default class ProductList extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    invokeHandler(IPC.PRODUCT.ALL)
      .then((res) => this.setState({ products: res }))
      .catch((err) => console.error("ERROR :", err.message));
  }

  renderHelper = () => {
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <tr>
          <td colSpan={5}>Tidak ada data Silahkan Tambahkan data</td>
        </tr>
      );
    }

    return products.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.barcode}</td>
          <td>{data.name}</td>
          <td>{data.price}</td>
          <td>{data.stock}</td>
          <td>{data.createAt}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Tabel Product</h3>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Barcode</th>
              <th>Nama Produk</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Tgl.Dibuat</th>
            </tr>
          </thead>
          <tbody>{this.renderHelper()}</tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>
                <Link to="/add-product">Tambah Data</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
