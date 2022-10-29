<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import Avatar from "../Shared/Avatar.vue";
const horseStore = useHorseStore()

</script>

<template>
    <div v-if="horseStore.getSortHorses" class="score"> 
        <div class="score__table">
            <table>
                <tr>
                    <th>Horse</th>
                    <th>Name</th>
                </tr>
                <tr v-for="(horse) in horseStore.horses" :key="horse.id" >
                    <td><Avatar :item="horse" :size="50"></Avatar></td>
                    <td>{{horse.name}}</td>
                </tr>
            </table>
        </div>
    </div>
</template> 


<style lang="scss" scoped>

    .score {
        width: 90%;
        height: 90%;
        font-size: 12px;
        background-color: 1px solid black;
            &__table {
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
                    tr{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-bottom: 1px solid white;
                        td {
                            width: 50%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        th{
                            width: 50%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }
        }
    }
</style>