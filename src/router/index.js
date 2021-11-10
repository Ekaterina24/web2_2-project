import VueRouter from "vue-router"
import Main from "@/components/Main";
import Posts from "@/components/Posts";
import Post from "@/components/Post";
import AboutUs from "@/components/AboutUs";

const routes = [
    { path: '/', component: Main },
    { path: '/posts', component: Posts },
    { path: '/post/:id', component: Post },
    { path: '/about', component: AboutUs }
]

const router = new VueRouter({
    routes
})

export default router