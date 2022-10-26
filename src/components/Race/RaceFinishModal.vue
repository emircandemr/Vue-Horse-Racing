<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import {useRouter} from "vue-router"
import Statistics from "./RaceStatistics.vue";
import {ref} from "vue"
import ScoreBoard from "./RaceScore.vue";

const router = useRouter()
const horseStore = useHorseStore()

const againHandler = () => {
    horseStore.againHandler()
}

const backHandler = () => {
    horseStore.againHandler()
    horseStore.setSelectHorse(null)
    router.push("/")
}

const statisticHandler = () => {
    horseStore.setIsStatistic(true)
    horseStore.setLeaderBoard(false)
}

const selected = ref("LeaderBoard")

const selectData = ref([
    {
        id : 1 ,
        name : "LeaderBoard",
        isActive : true,
        // handler : hadnler
    },
    {
        id : 2 ,
        name : "Statistics",
        isActive : false,
        // handler : hadnler
    }
])

const selectHandler = (e) => {
    selected.value = e.target.value
    console.log(e.target.value)
}



</script>

<template>
    <div v-if="horseStore.getLeaderBoard" class="modal">
        {{selected}}
        <div class="modal__layer"></div>
        <div class="modal__content">
            <select v-model="selected" @change="selectHandler" class="modal__content--select" >
                    <option v-for="select in selectData" :key="select.id" :value="select.name" >{{select.name}}</option>
            </select>
            <h1 class="modal__content--title">{{selected}}</h1>
            <div class="modal__component">
                <ScoreBoard v-if="selected === 'LeaderBoard'" />
                <Statistics v-else />
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 9999;

        &__layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
        }

        &__content {
            position: relative;
            width: 50%;
            height: 70%;
            background: #212121;
            border-radius: 20px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            // align-items: center;
            // justify-content: center;
            color: aliceblue;

            &--title {
                font-size: 1.5rem;
                font-weight: 700;
                margin: 1rem 0px;
            }

            &--select {
                width: 200px;
                height: 40px;
                border: none;
                border-radius: 10px;
                background-color: #121212;
                color: white;
                font-size: 16px;
                font-weight: 500;
                padding: 0 10px;
                outline: none;
                cursor: pointer;
                }
            
            &__component{
                width: 100%;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            &__button {
                width: 100px;
                height: 40px;
                border: none;
                border-radius: 10px;
                background-color: #121212;
                color: white;
                font-size: 16px;
                font-weight: 500;
                padding: 0 10px;
                outline: none;
                cursor: pointer;
                margin: 1rem 0px;


            }
        }
    }



</style>