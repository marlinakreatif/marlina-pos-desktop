import { ASYNC_MESSAGE, ASYNC_REPLY } from "../constants/ipc.constant";

const electron = window.require("electron");
const { ipcRenderer } = electron;

export default function send(message) {
  return new Promise((resolve) => {
    ipcRenderer.once(ASYNC_REPLY, (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send(ASYNC_MESSAGE, message);
  });
}
