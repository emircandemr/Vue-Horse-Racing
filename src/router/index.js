import { createRouter, createWebHashHistory } from "vue-router";
import {useHorseStore} from "../stores/use-horseData"


const routes = [
    {
        name : "Start",
        path : "/",
        component : () => import("../views/RaceStartView.vue")
    },
    {
        name : "Home",
        path : "/home",
        component : () => import("../views/RacePlayView.vue")
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory(),
})

router.beforeEach((to, from, next) => {
    const horseStore = useHorseStore()
    if(to.name === "Home" && !horseStore.selectedHorse) { // Home sayfasına giriş yapmadan önce bir at seçilmesi gerekir
        next({name : "Start"})
        // alert("At seçmeden giriş yapamazsınız")
    }
    next()

})


export default router