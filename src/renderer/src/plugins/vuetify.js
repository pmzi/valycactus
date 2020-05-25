import Vuetify, { VSnackbar } from "vuetify/lib";

export default function register(Vue) {
  Vue.use(Vuetify, {
    components: {
      VSnackbar
    }
  });

  return new Vuetify({
    rtl: true
  });
}
