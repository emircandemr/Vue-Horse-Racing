<script setup>
    import {useHorseStore} from "../../stores/use-horseData"
    import RaceHorse from "./RaceHorse.vue";
    import RaceFinishFlag from "./RaceFinishFlag.vue";
    const horseStore = useHorseStore()
</script>

<template>
    <div class="container">
        {{horseStore.startFlag}}  
        {{horseStore.finishFlag}} 
        {{horseStore.horses[0].position}} 
        <RaceHorse v-for="(horse,index) in horseStore.horses" :horse="horse" :index="index" :key="index"/>
        <RaceFinishFlag></RaceFinishFlag>
    </div>

</template>

<style lang="scss" scoped>

    .container{
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding: 0px 10px;
        color: white;
        background-color: #121212;
        border-radius: 15px;
        margin-left: 15px;
    }

</style>