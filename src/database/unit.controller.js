const { ipcMain } = require("electron");
const { UNIT } = require("../constants/ipc.constant");
const { async } = require("regenerator-runtime");
const DB = require("better-sqlite3-helper");

ipcMain.handle(UNIT.ALL, async (event, arg) => {
  return await DB().query(`SELECT * FROM units`);
});
