<script setup>
import { onMounted, ref } from 'vue';    
import {useHorseStore} from  "../../stores/use-horseData"

const horseStore = useHorseStore()

const flag = ref()

onMounted(() => {
    console.log(flag)
    horseStore.setFinishFlag((flag.value.offsetLeft-15))
})

</script>

<template>
    <div ref="flag" class="finish--line">
        <div class="finish--line--flag">
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .finish--line {
        position: absolute;
        top: 0;
        right: 5%;
        width: 10px;
        height: 100%;
        display: flex;
        place-items: center;
        background : gray;
        z-index: 99;
        &--flag {
            width: 50px;
            height: 100%;
        }

    }
    

</style>