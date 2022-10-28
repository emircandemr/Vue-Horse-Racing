<script setup>
import { onMounted, ref } from 'vue';    
import {useHorseStore} from  "../../stores/use-horseData"

const horseStore = useHorseStore()

const flag = ref()

onMounted(() => {
    horseStore.setFinishFlag((flag.value.offsetLeft-15)) // distance of the finish flag to the left of the screen
})

</script>

<template>
    <div ref="flag" class="finish">
        <div class="finish__flag">
        </div>
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
        &__flag {
            width: 50px;
            height: 100%;
        }
    }

</style>