import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import invokeHandler from "../../ipc/rendererIPC";
import { UNIT, PRODUCT } from "../../constants/ipc.constant";

class ProductAdd extends Component {
  state = {
    product: {
      barcode: "",
      name: "",
      buyingPrice: 0,
      sellingPrice: 0,
      unitId: 0,
      stock: 0,
      createAt: new Date().getTime(),
    },
    units: [],
  };
  componentDidMount() {
    invokeHandler(UNIT.ALL)
      .then((res) => this.setState({ units: res }))
      .catch((err) => console.error("ERROR :", err.message));
  }
  inputChange = (event) => {
    const { name, value } = event.target;
    const {product} = this.state;

    this.setState({
      product: {
        ...product,
        [name]: value,
      },
    });
  };

  render() {
    const { units, product } = this.state;
    console.log("STATE:", product);
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
                onChange={this.inputChange}
                size="sm"
                type="text"
                name="name"
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
                onChange={this.inputChange}
                size="sm"
                type="text"
                name="barcode"
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
                onChange={this.inputChange}
                size="sm"
                name="buyingPrice"
                type="number"
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
                onChange={this.inputChange}
                size="sm"
                type="number"
                name="sellingPrice"
                placeholder="masukan harga penjualan"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="group2">
            <Form.Label column sm={{ span: 2, offset: 1 }}>
              Satuan
            </Form.Label>
            <Col sm="4">
              <Form.Control
                onChange={this.inputChange}
                size="sm"
                as="select"
                name="unitId"
                defaultValue={product.unitId}
              >
                <option key={"nol"} value={0} disabled>{`Pilih Satuan`}</option>
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
