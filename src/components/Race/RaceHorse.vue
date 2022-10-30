<script setup>
    import { ref, watch} from 'vue';
    import {useHorseStore} from "../../stores/use-horseData"
    import {updateHorseData} from "../../services/horseService";
    // import race from "../../assets/audio/race.mp3"

    const horseStore = useHorseStore()
    const props = defineProps(["horse","start"])

    const horse = ref(props.horse)

    const horseAnimate = ref() // ref for the horse animation

    // const raceAudio = new Audio(race)

    const stopwatch = () => {
        const timer = setInterval(() => {
            if(horse.value.position < horseStore.finishFlagDistance){ // if the horse is not at the finish line
                horse.value.stopwatch.milliseconds++
                if (horse.value.stopwatch.milliseconds === 100) {
                    horse.value.stopwatch.milliseconds= 0
                    horse.value.stopwatch.seconds++
                }
                if (horse.value.stopwatch.seconds === 60) {
                    horse.value.stopwatch.seconds = 0
                    horse.value.stopwatch.minute++
                }
                return
            }
            clearInterval(timer)
        }, 10)
}

const move = () => {
    horseAnimate.value.style.left = horse.value.position + "px"
    horse.value.speed =Math.round(Math.random() * 15) + 2
    horse.value.position += horse.value.speed
    const timer = setTimeout(() => {
        if(horse.value.position < horseStore.finishFlagDistance){
                move()
                horseStore.updateHorsePosition(horse.value)
                return
            }
            clearTimeout(timer)
            // raceAudio.pause()
            // raceAudio.currentTime = 0;
            horseStore.setRaceStart(false)
            horseStore.setSortHorse(horse.value)
            updateHorseData(horseStore.sortHorses[0].id, horseStore.sortHorses[0])
            horseStore.setLeaderBoard(true)
        }, 100);
    }
    
    watch(() => horseStore.getisRaceStarted, () => {
        if(horseStore.getisRaceStarted){
            move()
            stopwatch()
            // raceAudio.play()
        }
    })
    
</script>

<template>
    <div class="horse" >
        <div ref="horseAnimate" class="horse__content">
            <img class="horse__content--img"  src="https://thumbs.gfycat.com/GleefulScarceBushsqueaker.webp" alt="horse">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .horse {
        &__content {
            width: 100px;
            height: 60px;
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            &--img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 99;
            }
        }
    }

</style>
