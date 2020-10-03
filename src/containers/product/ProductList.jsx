import React, { Component } from "react";
import { Link } from "react-router-dom";
import invokeHandler from "../../ipc/rendererIPC";
import * as IPC from "../../constants/ipc.constant";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

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
    console.log("PRODUCT", products);
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
          <td>{data.buyingPrice}</td>
          <td>{data.sellingPrice}</td>
          <td>{data.stock}</td>
          <td>{data.createAt}</td>
          <td>
            <Button size="sm">DETAIL</Button>
            <Button size="sm" className="m-1">HAPUS</Button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h4>Daftar Barang</h4>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Nama Produk</th>
                  <th>Harga Beli</th>
                  <th>Harga Jual</th>
                  <th>Stok</th>
                  <th>Tgl.Dibuat</th>
                  <th>Akasi</th>
                </tr>
              </thead>
              <tbody>{this.renderHelper()}</tbody>
              <tfoot>
                <tr>
                  <td colSpan={6}>
                    <Link to="/add-product">Tambah Data</Link>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
