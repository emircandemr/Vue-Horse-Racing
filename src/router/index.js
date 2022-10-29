import { createRouter, createWebHistory } from "vue-router";
import {useHorseStore} from "../stores/use-horseData"
import RaceStartView from "../views/RaceStartView.vue";

const routes = [
    {
        name : "Start",
        path : "/",
        component : RaceStartView
    },
    {
        name : "Home",
        path : "/home",
        component : () => import("../views/RacePlayView.vue")
    }
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, __ , next) => {
    const horseStore = useHorseStore()
    if(to.name === "Home" && !horseStore.selectedHorse) { // A horse must be selected before logging into the play page
        next({name : "Start"})
    }
    next()
})


export default router