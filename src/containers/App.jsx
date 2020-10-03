import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { ProductAdd, ProductList } from "./product";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <header>
        <Navbar variant="dark" bg="dark">
          <Navbar.Brand>HARAPAN MAJU ABAH</Navbar.Brand>
        </Navbar>
      </header>
      <main >
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/add-product" component={ProductAdd} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
