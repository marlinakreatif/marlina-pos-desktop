import React, { Component } from "react";
import { Link } from "react-router-dom";
import invokeHandler from "../../ipc/rendererIPC";
import {PRODUCT}from "../../constants/ipc.constant";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Icon from "../../icons";

export default class ProductList extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    invokeHandler(PRODUCT.ALL)
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
          <td>{data.buyingPrice}</td>
          <td>{data.sellingPrice}</td>
          <td>{`${data.stock} ${data.unit}`}</td>
          <td>{data.createAt}</td>
          <td>
            <Link to="edit">
              <img className="shop-btn-icon" src={Icon.pencilIco} alt="edit" />
            </Link>
            <Link to="edit">
              <img className="shop-btn-icon" src={Icon.trashIco} alt="edit" />
            </Link>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <Container >
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <td colSpan={7}>
                    <h5>
                      Daftar Produk
                      <div className="float-right">
                        <Link
                          to="/add-product"
                          className="btn btn-secondary btn-sm"
                        >
                          Tambah Produk
                        </Link>
                      </div>
                    </h5>
                  </td>
                </tr>
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
                  <td colSpan={7}>
                    Total Produk
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
