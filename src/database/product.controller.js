const DB = require("better-sqlite3-helper");

export const getAllProduct = async () => {
  return await DB().query("SELECT * FROM produk");
};
