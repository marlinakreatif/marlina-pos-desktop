/*
nama_tabel: products

    barcode
    name
    price
    stock
    createAt

*/

import { async } from "regenerator-runtime";

const DB = require("better-sqlite3-helper");

export const getAllProduct = async () => {
  return await DB().query(`
      SELECT 
          p.barcode, p.name,  p.sellingPrice, 
          p.buyingPrice, p.stock ,u.symbol as 'unit', 
          p.createAt
      FROM products p
      INNER JOIN  units u 
      ON p.unitId = u.id
  `);
};

export const getProductById = async (productId) => {
  return await DB().queryFirstRow(
    "SELECT * FROM products WHERE barcode=?",
    productId
  );
};

export const updateProduct = async (product, barcode) => {
  return await DB().update("products", product, barcode);
};

export const addProduct = async (product) => {
  return await DB().insert("products", product);
};

export const deleteProduct = async (barcode) => {
  return await DB().delete("products", { barcode });
};
