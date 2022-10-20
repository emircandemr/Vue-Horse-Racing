
<script setup>
import { computed,onMounted,ref } from "vue"
import {useStore} from "vuex"
const store = useStore()

const list = computed(() => store.state.horses)

const boardActive = computed(() => store.state.isBoardActive)

const score = computed(() => {
    return list.value.sort((a,b) => b.position - a.position)
})

// const selectedID = computed ( () => (store.state.selectedHorse))

</script>

<template>
    <div v-if="boardActive" class="board--modal">
        <div class="board--modal--layer"></div>
        <div class="board--modal--content">
            <div class="board--modal--content--header">
                <h1>Leader Board</h1>
            </div>
            <div class="board--modal--content--body">
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Horse</th>
                        <th>Position</th>
                    </tr>
                    <tr v-for="(horse, index) in score" :key="horse.id" >
                        <td>{{index + 1}}</td>
                        <td>{{horse.name}}</td>
                        <td>{{horse.position}}</td>
                    </tr>
                </table>
            </div>
            <div class="board--modal--content--footer">
                <button @click="store.commit('setBoardActive', false)">Close</button>
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

                    &:hover {
                        background-color: #000;
                        color: #fff;
                    }
                }
            }
        }
    }



</style>