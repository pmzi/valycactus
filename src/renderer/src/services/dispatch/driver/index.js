let driver;
let actions;

if (process.env.MODE === "electron") {
  const electron = require("./electron/index");
  driver = electron.driver;
  actions = electron.actions;
}

export { driver, actions };
