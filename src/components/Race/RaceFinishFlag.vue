<script setup>
import { ref,watch } from 'vue';    
import {useHorseStore} from  "../../stores/use-horseData"

const horseStore = useHorseStore()

const flag = ref()

watch(() => horseStore.isRaceStarted, () => {
    horseStore.setFinishFlag((flag.value.offsetLeft-15)) // distance of the finish flag to the left of the screen
})
    
</script>

<template>
    <div ref="flag" class="finish">
    </div>
</template>

<style lang="scss" scoped>
    .finish {
        width: 10px;
        height: 100%;
        position: absolute;
        right: 5%;
        top: 0;
        display: flex;
        place-items: center;
        background : gray;
        z-index: 99;
    }
</style>