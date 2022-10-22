import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name : "Start",
        path : "/",
        component : () => import("../Pages/StartPage.vue")
    },
    {
        name : "Home",
        path : "/home",
        component : () => import("../Pages/HomePage.vue")
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory(),
})

export default router