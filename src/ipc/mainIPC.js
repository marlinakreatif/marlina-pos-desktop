const { ipcMain } = require("electron");
const IPC = require("../constants/ipc.constant");
const users = require("../database/user.controller");
const products = require("../database/product.controller");
const { async } = require("regenerator-runtime");

ipcMain.handle(IPC.GET_ALL_USER, async (event, arg) => {
  return await users.getAllUser();
});

ipcMain.handle(IPC.PRODUCT.ALL, async (event, arg) => {
  return await products.getAllProduct();
});

ipcMain.handle(IPC.PRODUCT.ADD, async(event, arg)=>{
  console.log('ARGUMENT',arg);
  return await products.addProduct(arg);
})
