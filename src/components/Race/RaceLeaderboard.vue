<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import Avatar from "../Shared/Avatar.vue";

const horseStore = useHorseStore()

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
            <tr v-for="(horse, index) in horseStore.sortHorses" :key="horse.id" :class="{'active' : horse.id===horseStore.selectedHorse.id }" >
                <td>{{index + 1}}</td>
                <td><Avatar :item="horse" :size="50"></Avatar></td>
                <td>{{horse.name}}</td>
                <td>{{horse.stopwatch.minute}} : {{horse.stopwatch.seconds}} : {{horse.stopwatch.milliseconds}}</td>
            </tr>
        </table>
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
}
.active{
    color: rgb(255,129,65);
    }


</style>