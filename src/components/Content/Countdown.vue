<script setup>
    import { computed, onMounted, onUpdated, ref, watch } from 'vue';
    import {useHorseStore} from  "../../stores/use-horseData"

    const horseStore = useHorseStore()

    const countdown = ref(3)

    const start = () => {
        countdown.value = countdown.value - 1
    }

    const audio = new Audio("http://soundbible.com/mp3/old-fashioned-school-bell-daniel_simon.mp3")
    const audio2 = new Audio("http://soundbible.com/mp3/Horse Neigh-SoundBible.com-1126369713.mp3")

    onMounted( () => {
        const timer = setInterval(() => {
            if(countdown.value > 0){
                start()
                audio.play()
            }
            else{
                clearInterval(timer)
                horseStore.setStartFlag(true)
                audio2.play()
                horseStore.setCountdownActive(false)
                horseStore.setStartStopWatch(true)
            }
        }, 1000);
    })
    // onUpdated(() => {
    //     console.log("girdi")
    //     if(isActive){
    //         audio.play()
    //         if(countdown.value > 0){
    //         setTimeout(() => {
    //             start()
    //         }, 1000);
    //     }
    //     else{
    //         audio.pause()
    //         audio2.play()
    //         horseStore.setStartFlag(true)
    //         horseStore.setCountdownActive(false)
    //         countdown.value = 3
    //     }
    //     }
    // })


</script>

<template>
    <div v-if="horseStore.getCountdownActive" class="modal">
        <div class="modal--layer"></div>
        <div class="modal--content">
            
            <!-- <audio
                controls
                hidden="true"
                src="../assets/audio/deneme.mp3"
                ref="audio">
            </audio> -->
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
    z-index: 9999;

    &--layer{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.5;
    }

    &--content{
        position: relative;
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        z-index: 9999;

        h1{
            font-size: 100px;
            font-weight: 700;
            color: #121212;
        }
    }
}

</style>