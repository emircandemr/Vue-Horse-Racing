<script setup>
import {useHorseStore} from "../../stores/use-horseData"
const horseStore = useHorseStore()


const closeHandler = () => {
    horseStore.setLeaderBoard(false)
}

</script>

<template>
    <div v-if="horseStore.getLeaderBoard" class="board--modal">
        <div class="board--modal--layer"></div>
        <div class="board--modal--content">
            <div class="board--modal--content--header">
                <h1>Leader Board</h1>
                <div @click="closeHandler" class="close" >X</div>
            </div>
            <div class="board--modal--content--body">
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Horse</th>
                        <th>Position</th>
                    </tr>
                    <tr v-for="(horse, index) in horseStore.sortHorses" :key="horse.id" >
                        <td>{{index + 1}}</td>
                        <td>{{horse.name}}</td>
                        <td>{{horse.position}}</td>
                    </tr>
                </table>
            </div>
            <div class="board--modal--content--footer">
                <button>Back to Avatar</button>
                <button>Play Again</button>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

    .board--modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;

        &--layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
        }

        &--content {
            position: relative;
            width: 50%;
            height: 70%;
            background: #212121;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: aliceblue;

            &--header {
                width: 100%;
                height: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom: 1px solid #fff;

                .close{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #fff;
                    color: #000;
                    cursor: pointer;
                }

            }

            &--body {
                width: 100%;
                height: 60%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: auto;

                table {
                    width: 100%;
                    height: 100%;
                    border-collapse: collapse;

                    tr {
                        border-bottom: 1px solid #fff;

                        &:last-child {
                            border-bottom: none;
                        }

                        th {
                            padding: 10px;
                            text-align: left;
                        }

                        td {
                            padding: 10px;
                            text-align: left;
                        }
                    }
                }
            }

            &--footer {
                width: 100%;
                height: 20%;
                display: flex;
                align-items: center;
                justify-content: center;

                button {
                    padding: 10px;
                    background-color: #dcdcdc;
                    border: none;
                    cursor: pointer;
                    margin: 1rem;

                    &:hover {
                        background-color: #000;
                        color: #fff;
                    }
                }
            }
        }
    }



</style>