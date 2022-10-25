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
                <tr v-for="(horse, index) in horseStore.sortHorse" :key="horse.id" >
                    <td>{{index + 1}}</td>
                    <td><Avatar :item="horse" :size="50"></Avatar></td>
                    <td>{{horse.name}}</td>
                    <td>{{horse.position}}</td>
                </tr>
            </table>
    </div>
</template>


<style lang="scss" scoped>

.score{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    table{
        width: 800px;
        border-collapse: collapse;
        tr{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid white;
            td {
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            th{
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
        }
    }
}


</style>