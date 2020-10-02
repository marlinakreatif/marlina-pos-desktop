const electron = window.require("electron");
const { ipcRenderer } = electron;

export default function invokeHandler(action, arg) {
  return ipcRenderer.invoke(action, arg);
}
