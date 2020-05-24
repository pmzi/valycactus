const TOKEN_NAME = "_token";

import storage from "@/services/storage";

export function getToken() {
  return storage.read(TOKEN_NAME);
}

export function setToken(token) {
  storage.write(TOKEN_NAME, token);
}

export function deleteToken() {
  storage.remove(TOKEN_NAME);
}
