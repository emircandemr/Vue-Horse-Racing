<script setup>
    import {onMounted, ref, watch} from 'vue';
    import {useHorseStore} from "../../stores/use-horseData"
    // import {updateHorse} from "../../services/horseService";

    const props = defineProps(["horse","start"])

    const horseStore = useHorseStore()

    const horse = ref(props.horse)

    const horseAnimate = ref()


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
        const timer = setTimeout(() => {
            if(horse.value.position < horseStore.finishFlag){
                move()
                horseStore.updatedHorse(horse.value)
            }
            else{
                clearTimeout(timer)
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
    {{horseStore.finishFlag}}
    <div class="horse" >
        <div ref="horseAnimate" class="horse__content">
            <img class="horse__content--img"  src="https://thumbs.gfycat.com/GleefulScarceBushsqueaker.webp" alt="">
            <!-- <img v-else class="horse--content--img"  src="https://user-images.githubusercontent.com/72731296/198108256-a193d85f-ac8b-4443-a7e0-1cb156ed5cdd.png" alt=""> -->
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
