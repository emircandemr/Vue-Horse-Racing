<script setup>
    import {useHorseStore} from "../../stores/use-horseData"
    import Horse from "./Horse.vue";
    import Finish from "./Finish.vue";
    const horseStore = useHorseStore()
</script>

<template>
    <div class="container">
        {{horseStore.startFlag}}  
        {{horseStore.finishFlag}} 
        {{horseStore.horses[0].position}} 
        <Horse v-for="horse in horseStore.horses" :horse="horse" />
        <Finish></Finish>

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