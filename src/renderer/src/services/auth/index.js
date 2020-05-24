import AuthService from "./AuthService";

import { auth } from "@/api";

const authInstance = new AuthService({
  login: auth.login,
  logout: auth.logout,
  fetchUser: auth.fetchUser
});

export default authInstance;
