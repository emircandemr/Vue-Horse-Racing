<script setup>

import { onMounted, ref } from 'vue';    
import {useHorseStore} from "../stores/use-horseData"

const horseStore = useHorseStore()

const flag = ref()

onMounted(() => {
    console.log(flag)
    horseStore.setFinishFlag((flag.value.offsetLeft-380))
    // store.commit("setFinishFlag", flag.value.offsetLeft)
})

</script>

<template>
    <div ref="flag" class="finish--line">
        <div class="finish--line--flag">
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .finish--line {
        position: fixed;
        top: 0;
        right: 150px;
        width: 5px;
        height: 100vh;
        display: flex;
        place-items: center;
        background-color: black;
        z-index: 99;
        &--flag {
            width: 50px;
            height: 100%;
        }

    }
    

</style>