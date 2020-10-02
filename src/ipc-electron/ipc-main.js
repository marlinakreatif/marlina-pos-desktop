const { ipcMain } = require("electron");
const path = require("path");
const Database = require("better-sqlite3");
const dbPath = path.resolve(__dirname, "./shop.db");
const db = new Database(dbPath, {
  verbose: console.log,
});
const {
  GET_ALL_PRODUCT,
  ASYNC_MESSAGE,
  ASYNC_REPLY,
  GET_ALL_USER,
} = require("../constants/ipc.constant");
const { getAllUser } = require("./user.controller");
const { resolve } = require("path");

ipcMain.on(ASYNC_MESSAGE, (event, arg) => {
  console.log("ARGUMENT", arg);
  switch (arg.action) {
    case GET_ALL_PRODUCT:
      event.reply(ASYNC_REPLY, getAllProduct());
      break;
    case GET_ALL_USER:
      event.reply(ASYNC_REPLY, getAllUser());
      break;
    default:
      event.reply(ASYNC_REPLY, "request not found");
      break;
  }
});

ipcMain.handle(GET_ALL_USER, (event, arg) => {
  return getAllUser();
});

ipcMain.handle(GET_ALL_PRODUCT, async (event, arg) => {
  return await new Promise((resolve) => {
    resolve(getAllProduct());
  });
});

const getAllProduct = () => {
  try {
    console.info("PATH :", dbPath);

    if (db.open) {
      const stmt2 = db.prepare("SELECT * FROM produk");
      const row = stmt2.all();
      console.log("ROWS", row);
      return row;
    }
  } catch (error) {
    throw error;
  }

  return [];
};
