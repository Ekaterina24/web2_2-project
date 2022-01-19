import Vue from 'vue/dist/vue';
import VueRouter from "vue-router";
import Main from "@/views/Main";
import Posts from "@/views/Posts";
import Post from "@/views/Post";
import AboutUs from "@/views/AboutUs";
import Gallery from "@/views/Gallery";
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Main },
    { path: '/posts', component: Posts },
    { path: '/post/:id', component: Post, name: 'post' },
    { path: '/about', component: AboutUs },
    { path: '/gallery', component: Gallery }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router