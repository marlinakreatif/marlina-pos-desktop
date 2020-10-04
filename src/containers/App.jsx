import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import { ProductAdd, ProductList } from "./product";

const routes= ["/","/add-product"]

function App() {
  return (
    <Router initialEntries={routes} initialIndex={1}>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/add-product" component={ProductAdd} />
        </Switch>
      </main>
      <footer className="shop-footer fixed-bottom bg-dark">
        <span>Marlina Studio &trade; 2020</span>
      </footer>
    </Router>
  );
}

export default App;
