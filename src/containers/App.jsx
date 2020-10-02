import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { ProductAdd, ProductList } from "./product";

function App() {
  return (
    <Router>
      <div>Selamat Datang di HOME</div>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/add-product" component={ProductAdd} />
      </Switch>
    </Router>
  );
}

export default App;
