import { ipcRenderer } from 'electron';

export default function electron(action, data) {
  return new Promise((resolve, reject) => {
    ipcRenderer.send(action, data);
    ipcRenderer.once(`${action}:reply`, (event, arg) => resolve(arg));
  });
}
