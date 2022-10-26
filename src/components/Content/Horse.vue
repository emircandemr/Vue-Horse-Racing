<script setup>
    import {onMounted, ref, watch} from 'vue';
    import {useHorseStore} from "../../stores/use-horseData"
    // import {updateHorse} from "../../services/horseService";
import Avatar from '../Shared/Avatar.vue';

    const props = defineProps(["horse","start","index"])

    const horseStore = useHorseStore()

    const horse = ref(props.horse)

    const horseAnimate = ref()

    const audio = new Audio("http://soundbible.com/mp3/Horses Galloping Off-SoundBible.com-438542134.mp3")

    const stopwatch = () => {
        const timer = setInterval(() => {
            if(horse.value.position < horseStore.finishFlag){
                horse.value.stopwatch.milliseconds++
                if (horse.value.stopwatch.milliseconds === 100) {
                    horse.value.stopwatch.milliseconds= 0
                    horse.value.stopwatch.seconds++
                }
                if (horse.value.stopwatch.seconds === 60) {
                    horse.value.stopwatch.seconds = 0
                    horse.value.stopwatch.minute++
                }
            }
            else{
                clearInterval(timer)
            }
        }, 10)
}

    const move = () => {
        horseAnimate.value.style.left = horse.value.position + "px"
        horse.value.speed =Math.round(Math.random() * 15) + 2
        horse.value.position += horse.value.speed
        audio.play()
        const timer = setTimeout(() => {
            if(horse.value.position < horseStore.finishFlag){
                move()
                horseStore.updatedHorse(horse.value)
            }
            else{
                horseStore.setIsStopwatch(false)
                clearTimeout(timer)
                audio.pause()
                horseStore.setStartFlag(false)
                horseStore.setSortHorse(horse.value)
                // updateHorse(horseStore.sortHorse[0].id, horseStore.sortHorse[0])
                horseStore.setLeaderBoard(true)
            }
        }, 100);
    }

    watch(() => horseStore.startFlag, () => {
        if(horseStore.startFlag){
            move()
            stopwatch()
        }
    })

</script>

<template>
    <div class="horse" >
        {{horse.stopwatch.minute}} : {{horse.stopwatch.seconds}} : {{horse.stopwatch.milliseconds}} 
        <div class="horse__number">
            {{props.index+1}}
        </div>
        <div class="horse__name">
            <Avatar :item="props.horse" :size="40" ></Avatar>
        </div>
        <div ref="horseAnimate" class="horse--content">
            <img class="horse--content--img"  src="https://thumbs.gfycat.com/GleefulScarceBushsqueaker.webp" alt="">
            <!-- <img v-else class="horse--content--img"  src="https://user-images.githubusercontent.com/72731296/198108256-a193d85f-ac8b-4443-a7e0-1cb156ed5cdd.png" alt=""> -->
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .horse {
        position: relative;
        width: 95%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        margin: 10px 0px;
        // background-color: rgb(178,54,20);
        background-color: #212121;
        border-top: 2px solid gray;
        border-bottom: 2px solid gray;
        // border-radius: 25px;
        // border-bottom-left-radius: 20px;
        // border-top-left-radius: 20px;


        &__number{
            position: absolute;
            right: 30px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 2px solid gray;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
            z-index: 2;
        }

        &__name{
            position: absolute;
            left: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
        }

        &--content {
            position: absolute;
            display: flex;
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
