<script setup>
import { computed,onMounted,ref } from "vue"
import {useStore} from "vuex"
const store = useStore()

const list = computed(() => store.state.horses)

// const score = computed(() => {
//     return list.value.sort((a,b) => b.position - a.position)
// })

const score = computed(() => {
    return list.value.sort((a,b) => b.position - a.position)
})

const selectedID = computed ( () => (store.state.selectedHorse))

</script>


<template>
    <div class="score">
        <div class="score--winner">
            <h1>Table</h1>
            <div class="score--winner--list">
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Horse</th>
                        <th>Position</th>
                    </tr>
                    <tr v-for="(horse, index) in score" :key="horse.id" >
                        <td :class="{'selected' : horse.id === selectedID}">{{index + 1}}</td>
                        <td>{{horse.name}}</td>
                        <td>{{horse.position}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .score {
        width: 20%;
        max-height: 550px;
        background : #212121;
        border-radius: 20px;
        color: aliceblue;
        font-size: 18px;
        
        &--winner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;

            &--list {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;

                table {
                    width: 100%;
                    border-collapse: collapse;
                    border: 1px solid #ddd;
                    text-align: center;
                    font-size: 18px;
                    color: aliceblue;

                    th {
                        border: 1px solid #ddd;
                    }

                    td {
                        border: 1px solid #ddd;
                        transition: all 0.3s ease-in-out;
                    }

                    .selected {
                        background-color: #fff;
                        color: #000;
                    }
                }


            }

        }
    
    }

    .selected {
        background-color: red;
        border: 2px solid #fff;
    }




</style>