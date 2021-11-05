import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios/dist/axios.min.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const Main = {template: '<div>Приветствуем вас на нашем сайте!</div>'}
const News = {template: '<div>News</div>'}
const AboutUs = {template: '<div>AboutUs</div>'}

const routes = [
  { path: '/main', component: Main },
  { path: '/news', component: News },
  { path: '/about-us', component: AboutUs }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  data: {
      info: []
  },
  mounted() {
    axios
        .get("./articles.json")
        .then(response => (this.info = response));
  }
}).$mount('#app')
