<script setup>
import { onMounted, ref } from 'vue';
import horseData from "./assets/data/horses.json"
import HomePage from './Pages/HomePage.vue';
import StartPage from './Pages/StartPage.vue';
import {useStore} from "vuex"


const store = useStore()

const horses = ref(horseData)

onMounted(() => {
  store.commit("setHorses", horses.value)
})


const startHandler = () => {
  store.commit("setStartFlag", true)
  store.commit("setLoginPage", false)
}

</script>

<template>
  <HomePage/>
  <StartPage/>

</template>


<style lang="scss" scoped>

  .start {
    padding: 10px;
    background-color: #dcdcdc;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: #fff;
    }

  }

</style>