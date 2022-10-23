<!-- <script setup>
    import {useHorseStore} from "../../stores/use-horseData"
    import { onMounted, onUpdated, ref, watch, watchEffect } from 'vue';

    const horseStore = useHorseStore()

    const minute = ref(0)
    const second = ref(0)
    const millisecond = ref(0)

    const startTimer = () => {
            if(millisecond.value < 100){
                millisecond.value = millisecond.value + 1
            }
            else{
                millisecond.value = 0
                if(second.value < 60){
                    second.value = second.value + 1
                }
                else{
                    second.value = 0
                    minute.value = minute.value + 1
                }
            }
    }
    

    watch(() => horseStore.startStopWatch, (newVal, oldVal) => {
        if(newVal){
        const timer = setInterval(() => {
        if(horseStore.startStopWatch){
            startTimer()
        }
        else{
            clearInterval(timer)
        }
    }, 10);
        }
        else{
            clearInterval(timer)
        }
    })

</script>

<template>
    <div>
        <div class="time">
            <span class="minute">{{minute}}</span>
            <span>:</span>
            <span class="second">{{second}}</span>
            <span>:</span>
            <span class="millisecond">{{millisecond}}</span>

        </div>

    </div>
</template>

<style lang="scss" scoped>

</style> -->