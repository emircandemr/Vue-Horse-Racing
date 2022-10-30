<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"
import {useHorseStore} from "../../stores/use-horseData"
import Statistics from "./RaceStatistics.vue";
import LeaderBoard from "./RaceLeaderboard.vue";
import ButtonComp from "../Shared/Button.vue";

const horseStore = useHorseStore()
const router = useRouter()

const selected = ref("LeaderBoard")

const selectHandler = (event) => {
    selected.value = event.target.value
}

const againHandler = () => {  
    horseStore.playAgain() 
    horseStore.setCountdownActive(true)
}

const backToAvatarHandler = () => {
    horseStore.playAgain()
    router.push({name: "Start"})
}

const selectData = ref([
    {
        id : 1 ,
        name : "LeaderBoard",
        isActive : true,
    },
    {
        id : 2 ,
        name : "Statistics",
        isActive : false,
    }
])

const buttonData = [
    {   
        id : 1 ,
        text: "Play Again",
        handler: againHandler
    },
    {
        id : 2,
        text: "Back to Avatar",
        handler: backToAvatarHandler
    }
]



</script>

<template>
    <div v-if="horseStore.getLeaderBoard" class="modal">
        <div class="modal__layer"></div>
        <div class="modal__content">
            <select v-model="selected" @change="selectHandler" class="modal__content--select" >
                <option v-for="select in selectData" :key="select.id" :value="select.name" >{{select.name}}</option>
            </select>
            <h1 class="modal__content--title">{{selected}}</h1>
            <div class="modal__content--component">
                <LeaderBoard v-if="selected === 'LeaderBoard'" />
                <!-- The reason I use it as Suspense is because data is pulled from the firestore in the Statistics component. -->
                <Suspense v-else > 
                    <Statistics />
                </Suspense>
            </div>
            <div class="modal__content--button">
                <ButtonComp v-for="button in buttonData" :key="button.id" :button="button"></ButtonComp>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .modal {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 99;
        &__layer {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.5);
        }
        &__content {
            width: 50%;
            height: 700px;
            position: relative;
            display: flex;
            flex-direction: column;
            background: #212121;
            color: aliceblue;
            border-radius: 20px;
            padding: 1rem;
            
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
                padding: 5px 10px;
                outline: none;
                cursor: pointer;
                }
            
            &--component{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            &--button{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 0.5rem;
        
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .modal {
            &__content {
                width: 80%;
                height: 80%;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .modal {
            &__content {
                width: 90%;
                height: 95%;
            }
        }
    }
</style>