<script setup>
import { computed,onMounted,ref } from "vue"
import {useHorseStore} from "../stores/use-horseData"
const horseStore = useHorseStore()

// const list = computed(() => store.state.horses)

// const score = computed(() => {
//     return list.value.sort((a,b) => b.position - a.position)
// })

// const score = computed(() => {
//     return list.value.sort((a,b) => b.position - a.position)
// })

// const selectedID = computed ( () => (store.state.selectedHorse.id))



</script>


<template>
    <div class="score">
        <div class="score--list">
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Horse</th>
                    <th>Position</th>
                </tr>
                <tr v-for="(horse, index) in horseStore.horses" :key="horse.id" >
                    <td>{{index + 1}}</td>
                    <td>{{horse.name}}</td>
                    <td>{{horse.position}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .score {
        width: 90%;
        height: 100%;
        font-size: 12px;
            &--list {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                table {
                    width: 100%;
                    height: 80%;
                    border-collapse: collapse;
                    text-align: center;
                    font-size: 14px;

                    th {
                        border: 1px solid #ddd;
                    }

                    td {
                        border: 1px solid #ddd;
                        transition: all 0.3s ease-in-out;
                    }
                }
        }
    
    }

    .selected {
        background-color: red;
        border: 2px solid #fff;
    }




</style>