import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import registerVuetify from "./plugins/vuetify";
import registerAuth from "./plugins/auth";
import registerVuetifyToast from "./plugins/vuetifyToast";

registerAuth(Vue);
registerVuetifyToast(Vue);
const vuetify = registerVuetify(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
