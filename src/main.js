import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
new Vue({
  vuetify,
  i18n: new VueI18n({
    locale: "en",
  }),
  render: (h) => h(App),
}).$mount("#app");
