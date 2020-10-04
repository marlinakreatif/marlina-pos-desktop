import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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

  onSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    invokeHandler(PRODUCT.ADD, this.state.product)
      .then((res) => {
        alert("Simpan data berhasil");
        history.push("/");
      })
      .catch((err) => console.error("ERROR :", err.message));
  };
  inputChange = (event) => {
    const { name, value } = event.target;
    const { product } = this.state;

    this.setState({
      product: {
        ...product,
        [name]: value,
      },
    });
  };

  render() {
    const { units, product } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <h5>Tambah Produk</h5>
            <hr />
          </Col>
        </Row>
        <Form onSubmit={this.onSubmit}>
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
                required
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
                required
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
                required
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
                required
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
                required
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
          <Row>
            <Col>
              <Button size="sm" variant="dark" type="submit">
                SIMPAN
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default ProductAdd;
