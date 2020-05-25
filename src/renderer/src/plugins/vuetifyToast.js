import VuetifyToast from "vuetify-toast-snackbar";

export default function register(Vue) {
  Vue.component('');

  Vue.use(VuetifyToast, {
    x: "right", // default
    y: "bottom", // default
    color: "info", // default
    timeout: 3000, // default
    dismissable: true, // default
    autoHeight: false, // default
    multiLine: false, // default
    vertical: false, // default
    shorts: {
      custom: {
        color: "purple"
      }
    },
    property: "$message" // default
  });
}
