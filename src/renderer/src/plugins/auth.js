import auth from "@/services/auth";

export default function registerAuth(Vue) {
  Vue.use({
    install(Vue) {
      const obsAuth = Vue.observable(auth);
      Vue.prototype.$auth = obsAuth;
    }
  });
}
