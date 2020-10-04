const { ipcMain } = require("electron");
const { PRODUCT } = require("../constants/ipc.constant");
const { async } = require("regenerator-runtime");
const DB = require("better-sqlite3-helper");

ipcMain.handle(PRODUCT.ALL, async () => {
  return await DB().query(`
      SELECT 
          p.barcode, p.name,  p.sellingPrice, 
          p.buyingPrice, p.stock ,u.symbol as 'unit', 
          p.createAt
      FROM products p
      INNER JOIN  units u 
      ON p.unitId = u.id
    `);
});

ipcMain.handle(PRODUCT.GET_BY_ID, async () => {
  return await DB().queryFirstRow(
    "SELECT * FROM products WHERE barcode=?",
    barcode
  );
});

ipcMain.handle(PRODUCT.UPDATE, async (event, product) => {
  return await DB().update("products", product, product.barcode);
});

ipcMain.handle(PRODUCT.DELETE, async (event, barcode) => {
  return await DB().delete("products", { barcode });
});

ipcMain.handle(PRODUCT.ADD, async (event, product) => {
  return await DB().insert("products", product);
});
