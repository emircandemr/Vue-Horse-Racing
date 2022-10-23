<script setup>
    import {onMounted, ref, watch} from 'vue';
    import {useHorseStore} from "../../stores/use-horseData"

    const props = defineProps(["horse","start"])

    const horseStore = useHorseStore()

    const horse = ref(props.horse)

    const horseAnimate = ref()

    const audio = new Audio("http://soundbible.com/mp3/Horses Galloping Off-SoundBible.com-438542134.mp3")

    // const audio2 = new Audio("http://soundbible.com/mp3/Horse Neigh-SoundBible.com-1126369713.mp3")

    // const audio3 = new Audio("http://soundbible.com/mp3/Horse Whinny-SoundBible.com-1126369714.mp3")

    const move = () => {
        horseAnimate.value.style.left = horse.value.position + "px"
        horse.value.speed = Math.round(Math.random() * 15) + 2
        horse.value.position = horse.value.position + horse.value.speed
        const timer = setTimeout(() => {
            if(horse.value.position < horseStore.finishFlag){
                move()
            }
            else{
                clearTimeout(timer)
                horseStore.setSortHorse(horse.value)
                horseStore.setStartStopWatch(false)
                horseStore.setLeaderBoard(true)
                audio.play()
                // audio2.play()
                // audio3.play()
            }
        }, 100);
    }

    watch(() => horseStore.startFlag, () => {
        if(horseStore.startFlag){
            move()
        }
    })

</script>

<template>
    <div class="horse" >
        <div ref="horseAnimate" class="horse--content">
            <!-- <h2>{{horse.id}}</h2> -->
            <img class="horse--content--img"  src="https://thumbs.gfycat.com/GleefulScarceBushsqueaker.webp" alt="">
        </div>
    </div>


</template>

<style lang="scss" scoped>
    .horse {
        position: relative;
        width: 100%;
        height: 60px;
        z-index: 1;
        margin: 10px 0px;
        background-color: #121212;

        &--content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 60px;

            &--img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 99;
            }
        }
    }

</style>




// const oldPosition = ref(0)
// const newPosition = ref(20)

// const move = () => {
//     horseAnimate.value.animate([
//         {transform: `translateX(${oldPosition.value}px)`},
//         {transform: `translateX(${newPosition.value}px)`}
//     ])
//     oldPosition.value = newPosition.value
//     newPosition.value = newPosition.value + Math.round(Math.random() * 500) + 1
// }

// const startTimer = () => {
//     const timer = setTimeout(() => {
//         if(horseStore.startFlag){
//             move()
//         }
//     }, 1000);
// }

// onMounted(() => {
//     startTimer()
// })
