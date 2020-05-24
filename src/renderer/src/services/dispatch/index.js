import driver from "./driver";

export default function dispatch(action, data) {
  return driver.send(action, data);
}
