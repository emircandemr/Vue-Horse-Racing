<script setup>
    import { computed } from '@vue/reactivity';
    import { onMounted, onUpdated, ref, toRefs, watch } from 'vue';
    import {useStore} from "vuex"
    
    const store = useStore()

    const props = defineProps(["horse","start"])

    const horse = ref(props.horse)

    const startFlag = computed( () => {
        return store.state.startFlag
    })

    const finish = computed(() => {
        return store.state.finishFlag
    })

    // const audio = new Audio("http://soundbible.com/mp3/Horses Galloping Off-SoundBible.com-438542134.mp3")

    const count = ref(0)

    const run = () => {
        if(horse.value.position < finish.value && !horse.value.isFinished){
            // audio.play()
            horse.value.speed = Math.floor(Math.random() * 15)+1
            horse.value.position += horse.value.speed
            count.value = count.value + 1
            store.commit("updatePosition", {id : horse.value.id, position : horse.value.position, count : count.value})
            setTimeout(() => {
                run()
            }, 100);
        }
        else{
            console.log("girdi")
            // audio.pause()
            console.log(horse.value.isFinished)
            // horse.value.isFinished = true
            // horse.value.position = 0 ,
            // count.value = 0,
            // horse.value.speed = 0
            store.commit("setStartFlag", false)
            store.commit("setBoardActive", true)
        }
    }

    // onUpdated(() => {
    //     if(startFlag.value){
    //         setTimeout(() => {
    //             run()
    //         }, 100);
    //     }
    // //   setTimeout(() => {
    // //     if(startFlag.value){
    // //         run()
    // //     }
    // //   }, 100);
    // })

    watch(startFlag, (newVal) => {
        // console.log(newVal)
        if(newVal){
            run()
        }
    })

</script>

<template>
    <div class="horse" :style ="{left : `${horse.position}px`}" >
        <div class="horse--name"></div>
        <img class="horse--img"  src="https://thumbs.gfycat.com/GleefulScarceBushsqueaker.webp" alt="">
    </div>


</template>

<style lang="scss" scoped>
    .horse {
        position: relative;
        width: 100px;
        height: 60px;
        z-index: 1;
        margin: -10px;

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