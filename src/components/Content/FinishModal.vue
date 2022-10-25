<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import Avatar from "../Shared/Avatar.vue";
import {useRouter} from "vue-router"
import Statistics from "./Statistics.vue";
import {ref} from "vue"
import ScoreBoard from "./ScoreBoard.vue";

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

</script>

<template>
    <div v-if="horseStore.getLeaderBoard" class="board">
        <div class="board__layer"></div>
        <div class="board__header">
            <select v-model="selected" @change="selectHandler()" class="board__header--select" >
                    <option v-for="select in selectData" :key="select.id" :value="select.name" >{{select.name}}</option>
            </select>
            <div class="board__header--header">
                <h1 class="title">{{selected}}</h1>
            </div>
            <div class="board__content">
                <ScoreBoard v-if="selected === 'LeaderBoard'" />
                <Statistics v-if="selected === 'Statistics'" />
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>

    .board {
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

        &__content{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        &__header {
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

            &--header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 2rem;
                margin-left: 0.5rem;

                .title {
                    font-size: 20px;
                    font-weight: 700;
                }
            }

            
                &--button {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    button {
                        background-color:#121212;
                        padding: 10px;
                        margin: 1rem;
                        border-radius: 10px;
                        color: aliceblue;
                        font-size: 14px;
                        cursor: pointer;

                        &:hover {
                            background-color: #212121;
                        }

                    }
                }



            }
        }



</style>