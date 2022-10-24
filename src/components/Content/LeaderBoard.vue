<script setup>
import {useHorseStore} from "../../stores/use-horseData"
import Avatar from "../Shared/Avatar.vue";
import {useRouter} from "vue-router"

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

</script>

<template>
    <div v-if="horseStore.getLeaderBoard" class="board">
        <div class="board__layer"></div>
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

        &__content {
            position: relative;
            width: 50%;
            height: 70%;
            background: #212121;
            border-radius: 20px;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: aliceblue;

            table {
                    width: 80%;
                    height: 80%;
                    border-collapse: collapse;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
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