<script setup>
    import Horse from '../components/Horse.vue';
    import Finish from "../components/Finish.vue"
    import {useHorseStore} from "../stores/use-horseData"
    const horseStore = useHorseStore()
</script>

<template>
    <div class="container">
        {{horseStore.startFlag}}  
        {{horseStore.finishFlag}}  
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
        padding: 0px 10px;
        color: red;
        background-color: green;

    }

</style>