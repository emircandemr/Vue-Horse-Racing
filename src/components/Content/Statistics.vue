<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import Avatar from "../Shared/Avatar.vue";
const horseStore = useHorseStore()

</script>

<template>
    <div class="statistic">
        <div class="board__content">
            <h2>Leader Board</h2>
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
            <div class="board__content--button">
                <button @click="againHandler">Play Again</button>
                <button @click="backHandler" >Back to Avatar</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>