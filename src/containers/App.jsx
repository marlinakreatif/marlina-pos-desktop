import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { ProductAdd, ProductList } from "./product";
import { Navbar } from "react-bootstrap";
import Icons from "../icons";

function App() {
  return (
    <Router>
      <header>
        <div className="shop-title bg-dark">Harapan Maju Abah</div>
        <div className="menu-container">
          <div className="menu-item">
            <img src={Icons.shopIco} alt="shop" />
            <div className="menu-caption single">SHOP</div>
          </div>
          <div className="menu-item">
            <img src={Icons.productIco} alt="product" />
            <div className="menu-caption">DAFTAR PRODUK</div>
          </div>
          <div className="menu-item">
            <img src={Icons.cartInIco} alt="trx_buy" />
            <div className="menu-caption">RIWAYAT PEMBELIAN</div>
          </div>
          <div className="menu-item">
            <img src={Icons.cartInIco} alt="trx_sell" />
            <div className="menu-caption">RIWAYAT PENJUALAN</div>
          </div>
        </div>
      </header>
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
