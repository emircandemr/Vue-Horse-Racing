<script setup>
import { computed } from "@vue/reactivity";
import {useStore} from "vuex"
import {onMounted, onUpdated, ref, watch} from "vue"
const store = useStore()

const list = computed(() => store.state.horses)

const score = computed(() => {
    return list.value.sort((a,b) => b.position - a.position)
})

</script>


<template>
    <div class="score">
        <div class="score--winner">
            <h1>Table</h1>
            <div class="score--winner--list">
                <div class="score--winner--list--item" v-for="(item, index) in score" :key="index">
                    <div class="score--winner--list--item--name">
                        {{item.name}}
                    </div>
                    <div class="score--winner--list--item--position">
                        {{item.position}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .score {
        width: 300px;
        height: 300px;
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

                &--item {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    height: 50px;
                    width: 100%;
                    border-bottom: 1px solid #fff;

                    &--name {
                        width: 50%;
                        text-align: center;
                    }

                    &--position {
                        width: 50%;
                        text-align: center;
                    }
                }
            }

        }
    
    }




</style>