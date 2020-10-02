const { ipcMain } = require("electron");
const { GET_ALL_PRODUCT, GET_ALL_USER } = require("../constants/ipc.constant");
const { getAllUser } = require("../database/user.controller");
const { getAllProduct } = require("../database/product.controller");

ipcMain.handle(GET_ALL_USER, async (event, arg) => {
  return await getAllUser();
});

ipcMain.handle(GET_ALL_PRODUCT, async (event, arg) => {
  return await getAllProduct();
});
