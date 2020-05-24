import electron from "./electron";

let driver;

if (process.env.MODE === "electron") {
  driver = electron;
}

export default driver;
