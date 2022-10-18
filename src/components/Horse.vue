<script setup>
    import { onMounted, ref, toRefs } from 'vue';
    
    import {useStore} from "vuex"
    const store = useStore()

    const props = defineProps(["horse"])

    // const {isFinished} = toRefs(props.horse)

    const horse = ref(props.horse)

    const moveHorse = () => {
        const {speed, position} = horse.value
        horse.value.speed = speed + Math.floor(Math.random() * 2) + 1
        horse.value.position = position + speed
        // horse.value.position += Math.round(Math.random() * horse.value.speed)
        store.commit("updatePosition",{id : horse.value.id, position : horse.value.position})
        if(horse.value.position >= store.state.finishFlag) {
            horse.value.isFinished = true
        }
    }



    onMounted(() => {
        const timer = setInterval(() => {
            moveHorse()
            if(horse.value.isFinished) {
                clearInterval(timer)
            }
        }, 200)
    })

</script>

<template>
    <div class="horse" :style ="{left : `${horse.position}px`}" >
        <div class="horse--name">{{horse.name}}</div>
        <!-- <img class="horse--img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sedan-car.svg/1280px-Sedan-car.svg.png" alt=""> -->
    </div>


</template>

<style lang="scss" scoped>
    .horse {
        position: relative;
        width: 100px;
        height: 100px;
        margin: 15px;
        z-index: 1;
        background-color: #fff;
        &--img {
            width: 100%;
            height: 100%;
        }

    }

</style>