<script setup>
    import { onMounted, ref, toRefs } from 'vue';
    
    import {useStore} from "vuex"
    const store = useStore()

    const props = defineProps(["horse"])

    // const {isFinished} = toRefs(props.horse)

    const horse = ref(props.horse)

    const moveHorse = () => {
        horse.value.position += Math.round(Math.random() * horse.value.speed)
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
        }, 1000)
    })

</script>

<template>
    <div class="horse" :style ="{left : `${horse.position}px`}" >
        {{props.horse.name}}
    </div>


</template>

<style lang="scss" scoped>
    .horse {
        position: relative;
        width: 100px;
        height: 100px;
        margin: 15px;
        background-color: #fff;
        z-index: 1;
    }

</style>