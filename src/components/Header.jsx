import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icons from "../icons";

function Header() {
  return (
    <header className="inline-header">
      <Navbar sticky="top" className="nav-block">
        <div className="shop-title bg-dark">Harapan Maju Abah</div>
        <div className="menu-container">
          <Link to="/shop">
            <div className="menu-item">
              <img src={Icons.shopIco} alt="shop" />
              <div className="menu-caption single">SHOP</div>
            </div>
          </Link>
          <Link to="/">
            <div className="menu-item">
              <img src={Icons.productIco} alt="product" />
              <div className="menu-caption">DAFTAR PRODUK</div>
            </div>
          </Link>
          <Link to="/">
            <div className="menu-item">
              <img src={Icons.cartInIco} alt="trx_buy" />
              <div className="menu-caption">RIWAYAT PEMBELIAN</div>
            </div>
          </Link>
          <Link to="/">
            <div className="menu-item">
              <img src={Icons.cartInIco} alt="trx_sell" />
              <div className="menu-caption">RIWAYAT PENJUALAN</div>
            </div>
          </Link>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
