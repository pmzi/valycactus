import authPlugin from "./authPlugin";

import { auth } from "@/api";

export default function registerAuth(Vue) {
  Vue.use(authPlugin, {
    login: auth.login,
    logout: auth.logout,
    fetchUser: auth.fetchUser
  });
}
