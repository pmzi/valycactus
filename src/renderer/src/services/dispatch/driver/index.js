let driver;
let actions;

if (process.env.VUE_APP_MODE === "electron") {
  const electron = require("./electron/index");
  driver = electron.electron;
  actions = electron.actions;
}

export { driver, actions };
