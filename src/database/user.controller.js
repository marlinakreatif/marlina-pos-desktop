const { ipcMain } = require("electron");
const { USER } = require("../constants/ipc.constant");
const { async } = require("regenerator-runtime");

ipcMain.handle(USER.ALL, (event, arg) => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      id: i,
      username: `USER - ${i}`,
    });
  }
  return data;
});
