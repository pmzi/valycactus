import { driver, actions } from "./driver";

import { getToken } from "@/services/auth/tokenHandler";

function dispatch(action, data) {
  return driver(action, {
    ...data,
    _token: getToken()
  });
}

export { dispatch, actions };
