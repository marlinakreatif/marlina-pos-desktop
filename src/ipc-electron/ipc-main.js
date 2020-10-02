const { ipcMain } = require("electron");
const path = require("path");
const Database = require("better-sqlite3");
const {
  GET_ALL_PRODUCT,
  ASYNC_MESSAGE,
  ASYNC_REPLY,
} = require("../constants/ipc.constant");
const db = new Database(path.resolve(__dirname, "./shop.db"), {
  verbose: console.log,
});

ipcMain.on(ASYNC_MESSAGE, (event, arg) => {
  switch (arg.action) {
    case GET_ALL_PRODUCT:
      event.reply(ASYNC_REPLY, getAllProduct());
      break;

    default:
      event.reply(ASYNC_REPLY, "request not found");
      break;
  }
  console.log("ARGUMENT", arg);
});

const getAllProduct = () => {
  const stmt2 = db.prepare("SELECT * FROM produk");
  const row = stmt2.all();
  return row;
};
