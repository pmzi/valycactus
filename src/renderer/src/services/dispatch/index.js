import { driver, actions } from "./driver";

function dispatch(action, data) {
  return driver(action, data);
}

export { dispatch, actions };
