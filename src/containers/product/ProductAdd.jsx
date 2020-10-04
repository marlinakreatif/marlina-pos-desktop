import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import invokeHandler from "../../ipc/rendererIPC";
import { UNIT, PRODUCT } from "../../constants/ipc.constant";

class ProductAdd extends Component {
  state = {
    product: {},
    units: [],
  };
  componentDidMount() {
    invokeHandler(UNIT.ALL)
      .then((res) => this.setState({ units: res }))
      .catch((err) => console.error("ERROR :", err.message));
  }

  render() {
    const { units } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <h5>Tambah Produk</h5>
            <hr />
          </Col>
        </Row>
        <Form>
          <Form.Group as={Row} controlId="group1">
            <Form.Label column sm={{ span: 2, offset: 1 }}>
              Nama Produk
            </Form.Label>
            <Col sm="4">
              <Form.Control
                size="sm"
                type="text"
                placeholder="masukan nama produk"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="group2">
            <Form.Label column sm={{ span: 2, offset: 1 }}>
              Barcode
            </Form.Label>
            <Col sm="4">
              <Form.Control
                size="sm"
                type="text"
                placeholder="masukan barcode"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="group3">
            <Form.Label column sm={{ span: 2, offset: 1 }}>
              Harga Pembelian
            </Form.Label>
            <Col sm="4">
              <Form.Control
                size="sm"
                type="text"
                placeholder="masukan harga pembelian"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="group4">
            <Form.Label column sm={{ span: 2, offset: 1 }}>
              Harga Penjualan
            </Form.Label>
            <Col sm="4">
              <Form.Control
                size="sm"
                type="text"
                placeholder="masukan harga penjualan"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="group2">
            <Form.Label column sm={{ span: 2, offset: 1 }}>
              Satuan
            </Form.Label>
            <Col sm="4">
              <Form.Control size="sm" as="select">
                {units.map((unit, i) => {
                  return (
                    <option
                      key={i}
                      value={unit.id}
                    >{`${unit.name} - ${unit.symbol}`}</option>
                  );
                })}
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default ProductAdd;
