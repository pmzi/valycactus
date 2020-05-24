const { ipcRenderer } = require("electron");
import * as actions from "./actions";

function electron(action, data) {
  return new Promise(resolve => {
    ipcRenderer.send(action, data);
    ipcRenderer.once(`${action}:reply`, (event, arg) => resolve(arg));
  });
}

export { electron, actions };
