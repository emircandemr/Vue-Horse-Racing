<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import {useRouter} from "vue-router"
import Avatar from "../Shared/Avatar.vue";
import ButtonComp from "../Shared/Button.vue";

const router = useRouter()
const horseStore = useHorseStore()

const againHandler = () => {  
    horseStore.playAgain() 
    horseStore.setCountdownActive(true)
}

const backToAvatarHandler = () => {
    horseStore.playAgain()
    router.push("/")
}

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
    <div class="score">
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Horse</th>
                    <th>Name</th>
                    <th>Time</th>
                </tr>
                <tr v-for="(horse, index) in horseStore.sortHorses" :key="horse.id" >
                    <td>{{index + 1}}</td>
                    <td><Avatar :item="horse" :size="50"></Avatar></td>
                    <td>{{horse.name}}</td>
                    <td>{{horse.stopwatch.minute}} : {{horse.stopwatch.seconds}} : {{horse.stopwatch.milliseconds}}</td>
                </tr>
            </table>
            <div class="score__button">
                <ButtonComp v-for="button in buttonData" :key="button.id" :button="button"></ButtonComp>
            </div>
    </div>
</template>


<style lang="scss" scoped>
.score{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    table{
        width: 95%;
        border-collapse: collapse;
        background-color: #121212;
        border-radius: 20px;
        tr{
            width: 100%;
            height: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid gray;
            td {
                width: 80%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            th{
                width: 80%;
                height: 100%;
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    &__button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        
    }

}


</style>