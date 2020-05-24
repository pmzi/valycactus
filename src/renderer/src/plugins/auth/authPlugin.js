import AuthService from "./AuthService";

export default {
  install(Vue, options) {
    const auth = Vue.observable(new AuthService(options));

    Vue.prototype.$auth = auth;
  }
};
