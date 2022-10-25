<script setup>
import {useHorseStore} from "../../stores/use-horseData"

const horseStore = useHorseStore()

</script>

<template>
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
    <div>
        <button @click="againHandler">Play Again</button>
        <button @click="backHandler" >Back to Avatar</button>
    </div>
</template>


<style lang="scss" scoped>
table {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 14px;

    tr{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid white;
        td {
            width: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        th{
            width: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
}

</style>