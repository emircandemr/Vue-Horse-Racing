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
        name : "Play",
        path : "/play",
        component : () => import("../views/RacePlayView.vue")
    },
    { 
    path: '/:pathMatch(.*)*', 
    redirect: { name: 'Start' }
}
]

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, __ , next) => {
    const horseStore = useHorseStore()
    if(to.name === "Play" && horseStore.selectedHorse=== null) { // A horse must be selected before logging into the play page
        next({name : "Start"})
    }
    next()
})


export default router