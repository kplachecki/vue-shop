import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { store } from "./store";
import { routes } from "./routes";
import { type } from 'os';

Vue.filter('moneyFormat', function(value) {
  return value.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN'})

  // if(typeof value === 'string') return value
  // return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' $'
})

Vue.filter('cartEmpty', function(value) {
  if(value <= 0) return '(empty)'
  else return value

})

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
