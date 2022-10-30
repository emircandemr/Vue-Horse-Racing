<script setup>
import { ref,watch } from 'vue';    
import {useHorseStore} from  "../../stores/use-horseData"
import race from "../../assets/audio/race.mp3"

const horseStore = useHorseStore()
const raceAudio = new Audio(race)

const flag = ref()

// I'm tracking the change with watch because it needs to work responsively.
watch(() => horseStore.getisRaceStarted, () => {
    horseStore.setFinishFlag((flag.value.offsetLeft-15)) // distance of the finish flag to the left of the screen
    raceAudio.play()
    if(!horseStore.getisRaceStarted){
        raceAudio.pause()
        raceAudio.currentTime=0
    }
})
    
</script>

<template>
    <div ref="flag" class="finish"></div>
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