<script setup>
    import { ref, watchEffect } from 'vue';
    import {useHorseStore} from  "../../stores/use-horseData"
    import bell from "../../assets/audio/bell.mp3"
    import neigh from "../../assets/audio/neigh.mp3"
    
    const audioBell = new Audio(bell)
    const audioNeigh = new Audio(neigh)
   
    const horseStore = useHorseStore()

    const countdown = ref(3)

    const startTimer = () => {
        const timer = setInterval(() => {
            if(countdown.value > 1){
                countdown.value -= 1
                audioBell.play()
                return
            }
            audioBell.pause()
            audioBell.currentTime = 0;
            audioNeigh.play()
            horseStore.setRaceStart(true) // The func that starts the race when the countdown is over
            horseStore.setCountdownActive(false)
            clearInterval(timer)
        }, 1000);
    }

    watchEffect(() => {
        if(horseStore.getCountdownActive){
            countdown.value = 3
            startTimer()
        }
    })
    
</script>

<template>
    <div v-if="horseStore.getCountdownActive" class="modal">
        <div class="modal__layer"></div>
        <div class="modal__content">
            <h1>{{countdown}}</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.modal{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

    &__layer{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.5;
    }

    &__content{
        width: 300px;
        height: 300px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        z-index: 99;
        h1{
            font-size: 100px;
            font-weight: 700;
            color: white;
        }
    }
}

</style>