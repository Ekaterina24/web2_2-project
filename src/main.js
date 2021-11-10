import Vue from 'vue/dist/vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import index from "@/router";

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: index
}).$mount('#app')



