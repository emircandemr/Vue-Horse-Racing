<script setup>
    import { ref, watchEffect } from 'vue';
    import {useHorseStore} from  "../../stores/use-horseData"

    const horseStore = useHorseStore()

    const countdown = ref(3)

    const startCountDown = () => {
        countdown.value -= 1
    }

    const audio = new Audio("http://soundbible.com/mp3/old-fashioned-school-bell-daniel_simon.mp3")
    const audio2 = new Audio("http://soundbible.com/mp3/Horse Neigh-SoundBible.com-1126369713.mp3")

    const startTimer = () => {
        const timer = setInterval(() => {
            if(countdown.value > 1){
                startCountDown()
                audio.play()
                return
            }
            audio.pause()
            audio2.play()
            horseStore.setRaceStart(true)
            horseStore.setCountdownActive(false)
            clearInterval(timer)
        }, 1000);
    }

    watchEffect(() => {
        if(horseStore.isCountdownActive){
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

    &__layer{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.5;
    }

    &__content{
        position: relative;
        width: 300px;
        height: 300px;
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