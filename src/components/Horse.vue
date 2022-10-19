<script setup>
    import { computed } from '@vue/reactivity';
    import { onMounted, onUpdated, ref, toRefs, watch } from 'vue';
    
    import {useStore} from "vuex"
    const store = useStore()

    const props = defineProps(["horse"])

    // const {isFinished} = toRefs(props.horse)

    const horse = ref(props.horse)

    const finish = computed(() => {
        return store.state.finishFlag
    })
    const count = ref(0)

    const run = () => {
        if(horse.value.position < finish.value && !horse.value.isFinished){
            horse.value.speed = Math.floor(Math.random() * 20) + 1
            horse.value.position += horse.value.speed
            count.value = count.value + 1
            setTimeout(() => {
                run()
            }, 30);
        }else{
            store.commit("updatePosition", {id : horse.value.id, position : horse.value.position, count : count.value})
            horse.value.isFinished = true
            console.log(count.value)
            setTimeout(() => {
                horse.value.position=0,
                horse.value.speed=0,
                horse.value.isFinished=false,
                store.commit("setStartFlag", false)
            }, 1000);
        }
    }

    const startFlag = computed(() => {
        return store.state.startFlag
    })

    watch(startFlag, (val) => {
        if(val){
            run()
        }
    })

    // const moveHorse = () => {
    //     horse.value.speed += Math.floor(Math.random() * 10) + 1
    //     horse.value.position += Math.round(Math.random() * horse.value.speed)
    //     store.commit("updatePosition",{id : horse.value.id, position : horse.value.position})
    //     if(horse.value.position >= store.state.finishFlag) {
    //         horse.value.isFinished = true
    //     }
    // }


    // const start = () => {
    //     const interval = setInterval(() => {
    //         if(horse.value.isFinished) {
    //             clearInterval(interval)
    //         } else {
    //             moveHorse()
    //         }
    //     }, 300)
    // }

    // onMounted(() => {
    //     start()
    //     console.log(typeof horse.value.position)
    // })

</script>

<template>
    <div class="horse" :style ="{left : `${horse.position}px`}" >
        <div class="horse--name"></div>
        <img class="horse--img"  src="../assets/carbg.png" alt="">
    </div>


</template>

<style lang="scss" scoped>
    .horse {
        position: relative;
        width: 150px;
        height: 80px;
        z-index: 1;
        margin: 10px;

        &--name {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.5;
            z-index: 1;
        }

        &--img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
        }

    }

</style>