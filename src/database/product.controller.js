const { ipcMain } = require("electron");
const { PRODUCT } = require("../constants/ipc.constant");
const { async } = require("regenerator-runtime");
const DB = require("better-sqlite3-helper");

ipcMain.handle(PRODUCT.ALL, async (event, arg) => {
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

ipcMain.handle(PRODUCT.GET_BY_ID, async (event, arg) => {
  return await DB().queryFirstRow(
    "SELECT * FROM products WHERE barcode=?",
    barcode
  );
});

ipcMain.handle(PRODUCT.UPDATE, async (event, arg) => {
  return await DB().update("products", product, barcode);
});

ipcMain.handle(PRODUCT.DELETE, async (event, arg) => {
  return await DB().delete("products", { barcode });
});

ipcMain.handle(PRODUCT.ADD, async (event, arg) => {
  return await DB().insert("products", product);
});
