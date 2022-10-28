<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import Avatar from "../Shared/Avatar.vue";
import {useRouter} from "vue-router"

const router = useRouter()
const horseStore = useHorseStore()

const againHandler = () => {
    horseStore.againHandler()
    horseStore.setCountdownActive(true)
}

const backToAvatarHandler = () => {
    horseStore.againHandler()
    horseStore.setSelectHorse(null)
    router.push("/")
}
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
                <tr v-for="(horse, index) in horseStore.sortHorse" :key="horse.id" >
                    <td>{{index + 1}}</td>
                    <td><Avatar :item="horse" :size="50"></Avatar></td>
                    <td>{{horse.name}}</td>
                    <td>{{horse.stopwatch.minute}} : {{horse.stopwatch.seconds}} : {{horse.stopwatch.milliseconds}}</td>
                </tr>
            </table>
            <div class="score__button">
                <button @click="againHandler" class="score__button--again">Play Again</button>
                <button @click="backToAvatarHandler" class="score__button--back">Back To Avatar</button>
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
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid gray;
            td {
                width: 80%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            th{
                padding: 1rem;
                width: 80%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
        }
    }

    &__button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        button{
            background: #121212;
            min-width: 80px;
            padding: 0.8rem ;
            color: aliceblue;
            border: 2px solid #212121;
            border-radius: 10px;
            margin-right: 1rem;
            cursor: pointer;

            &:hover{
                background: #212121;
                border: 2px solid #121212;
            }

        }
        
    }

}


</style>