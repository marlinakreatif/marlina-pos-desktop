import {
  ASYNC_MESSAGE,
  ASYNC_REPLY,
  GET_ALL_PRODUCT,
  GET_ALL_USER,
} from "../constants/ipc.constant";

const electron = window.require("electron");
const { ipcRenderer } = electron;

export default function send(message) {
  return new Promise((resolve) => {
    ipcRenderer.on(ASYNC_REPLY, (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send(ASYNC_MESSAGE, message);
  });
}

export function handleGetAllUser() {
  return ipcRenderer.invoke(GET_ALL_USER);
}

export const handleGetAllProduct = () => {
  return ipcRenderer.invoke(GET_ALL_PRODUCT);
};
