<script setup>
import { onMounted, ref, watchEffect,watch, onUpdated } from 'vue';    
import {useHorseStore} from  "../../stores/use-horseData"

const horseStore = useHorseStore()

const flag = ref()

// onMounted(() => {
//     console.log("mounted")
//     horseStore.setFinishFlag((flag.value.offsetLeft-15)) // distance of the finish flag to the left of the screen
// })

// onUpdated(() => {
//     horseStore.setFinishFlag((flag.value.offsetLeft-15)) // distance of the finish flag to the left of the screen
// })

watch((e) => flag.value, () => {
    console.log(flag.value)
    horseStore.setFinishFlag((flag.value.offsetLeft-15))
    })
    
</script>

<template>
    <div ref="flag" class="finish">
    </div>
</template>


<style lang="scss" scoped>
    .finish {
        position: absolute;
        top: 0;
        right: 5%;
        width: 10px;
        height: 100%;
        display: flex;
        place-items: center;
        background : gray;
        z-index: 99;
    }

</style>