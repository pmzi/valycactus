import AuthService from "./AuthService";
import { dispatcher } from "@/services/dispatch";

import { auth } from "@/api";

const authInstance = new AuthService({
  login: auth.login,
  logout: auth.logout,
  fetchUser: auth.fetchUser
});

dispatcher.registerBefore((action, data) => {
  data._token = authInstance.getToken();
});

dispatcher.registerAfter((action, res) => {
  if (res.status === 401) {
    authInstance.wipUser();
  }
});

export default authInstance;
