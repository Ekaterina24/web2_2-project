import Vue from 'vue'
import App from './App.vue'
import index from "@/router"
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router"
import store from "./store";
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: index,
  store
}).$mount('#app')



