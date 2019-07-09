import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { store } from "./store";
import { routes } from "./routes";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
